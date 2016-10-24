import { createStore, applyMiddleware, compose } from 'redux'
import { autoRehydrate } from 'redux-persist'
import createLogger from 'redux-logger'
import Config from '../Config/DebugSettings'
import R from 'ramda'
// import RehydrationServices from '../Services/RehydrationServices'
import ReduxPersist from '../Config/ReduxPersist'
import { StartupTypes } from './StartupRedux'

// creates the store
export default (rootReducer) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  /* ------------- Logger Middleware ------------- */

  const SAGA_LOGGING_BLACKLIST = ['EFFECT_TRIGGERED', 'EFFECT_RESOLVED', 'EFFECT_REJECTED', 'persist/REHYDRATE']
  if (__DEV__) {
    // the logger master switch
    const USE_LOGGING = Config.reduxLogging
    // silence these saga-based messages
    // create the logger
    const logger = createLogger({
      predicate: (getState, { type }) => USE_LOGGING && R.not(R.contains(type, SAGA_LOGGING_BLACKLIST))
    })
    middleware.push(logger)
  }

  /* ------------- Reactotron Enhancer ------------- */

  // in dev, let's bring **START** with Reactotron's store enhancer
  if (__DEV__) {
    // only bring in Reactotron in dev mode
    const createReactotronEnhancer = require('reactotron-redux')

    // create it
    const reactotronEnhancer = createReactotronEnhancer(console.tron, {
      // you can flag some of your actions as important by returning true here
      isActionImportant: action =>
        action.type === StartupTypes.STARTUP,

    })
    enhancers.push(reactotronEnhancer)
  }

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  /* ------------- AutoRehydrate Enhancer ------------- */

  // add the autoRehydrate enhancer
  if (ReduxPersist.active) {
    enhancers.push(autoRehydrate())
  }

  const store = createStore(rootReducer, compose(...enhancers))

  // configure persistStore and check reducer version number
  if (ReduxPersist.active) {
    //RehydrationServices.updateReducers(store)
  }


  return store
}
