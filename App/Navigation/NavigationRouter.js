import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'

import LoginScreen from '../Containers/LoginScreen'
import ManualRegisterScreen from '../Containers/ManualRegisterScreen'
import UserSetupScreen from '../Containers/UserSetupScreen'
import AvatarListScreen from '../Containers/AvatarListScreen'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper'
            navigationBarStyle={Styles.navBar}
            titleStyle={Styles.title}
            leftButtonIconStyle={Styles.leftButton}
            rightButtonTextStyle={Styles.rightButton}
          >
            <Scene initial key='login' component={LoginScreen} title='Login' hideNavBar />
            <Scene key='manual_register' component={ManualRegisterScreen} title='Manual Register' hideNavBar />
            <Scene key='user_setup' component={UserSetupScreen} title='User Setup' hideNavBar />
            <Scene key='avatar_list' component={AvatarListScreen} title='Avatar List' hideNavBar />

          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
