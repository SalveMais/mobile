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
import Styles from './Styles/ManualRegisterScreenStyles'
import { Images } from '../Themes'

import LoginActions from '../Redux/LoginRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'

import OpacityInput from '../Components/OpacityInput';
import OpacityButton from '../Components/OpacityButton';

class ManualRegisterScreen extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }

  }

  render () {
    return (
      <View style={[Styles.container]} keyboardShouldPersistTaps>
        <Image source={Images.logo_white} style={[Styles.topLogo]} />
        <OpacityInput
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
          placeholder="E-mail"
          placeholderTextColor="#FFF"
        />
        <OpacityInput
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          placeholder="Senha"
          placeholderTextColor="#FFF"
        />

        <OpacityButton
          text="ENTRAR"
          onPress={NavigationActions.user_setup}
          styles={Styles.button}
        />

      </View>
    )
  }

}

ManualRegisterScreen.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ManualRegisterScreen)
