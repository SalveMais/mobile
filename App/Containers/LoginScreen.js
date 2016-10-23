import React, {PropTypes} from 'react'
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  LayoutAnimation
} from 'react-native'
import { connect } from 'react-redux'
import Styles from './Styles/LoginScreenStyle'
import {Images, Metrics} from '../Themes'
import LoginActions from '../Redux/LoginRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import CustomButton from '../Components/CustomButton'

class LoginScreen extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View style={[Styles.container]} keyboardShouldPersistTaps>
        <Image source={Images.logo_white} style={[Styles.topLogo]} />

        <View style={Styles.row}>
          <CustomButton
            text="Entrar com Facebook"
            icon="facebook"
            onPress={() => {}} />
        </View>

        <View style={Styles.row}>
          <CustomButton
            text="Entrar com Email"
            icon="envelope"
            onPress={NavigationActions.manual_register} />
        </View>

      </View>
    )
  }

}

LoginScreen.propTypes = {
  dispatch: PropTypes.func,
  fetching: PropTypes.bool,
  attemptLogin: PropTypes.func
}

const mapStateToProps = state => {
  return {
    fetching: state.login.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: (username, password) => dispatch(LoginActions.loginRequest(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
