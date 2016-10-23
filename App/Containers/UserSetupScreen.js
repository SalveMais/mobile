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
import Styles from './Styles/UserSetupScreenStyles'
import { Images } from '../Themes'

import LoginActions from '../Redux/LoginRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'

import OpacityInput from '../Components/OpacityInput';
import OpacityButton from '../Components/OpacityButton';

class ManualRegisterScreen extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      cpf: "",
      uf: "",
      city: "",
      bloodType: ""
    }

  }

  render () {
    return (
      <View style={[Styles.container]} keyboardShouldPersistTaps>
        <TouchableOpacity onPress={ NavigationActions.avatar_list }>
          <Image source={Images.base_avatar} style={[Styles.avatar]} />
        </TouchableOpacity>

        <OpacityInput
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
          placeholder="Nome"
          placeholderTextColor="#FFF"
        />
        <OpacityInput
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
          placeholder="E-mail"
          placeholderTextColor="#FFF"
        />
        <OpacityInput
          onChangeText={(cpf) => this.setState({cpf})}
          value={this.state.cpf}
          placeholder="CPF"
          placeholderTextColor="#FFF"
        />

        <View style={Styles.addressRow}>
          <OpacityInput
            onChangeText={(uf) => this.setState({uf})}
            value={this.state.uf}
            placeholder="uf"
            placeholderTextColor="#FFF"
            style={Styles.uf}
          />
          <OpacityInput
            onChangeText={(city) => this.setState({city})}
            value={this.state.city}
            placeholder="Cidade"
            placeholderTextColor="#FFF"
            style={Styles.city}
          />
        </View>

        <OpacityInput
          onChangeText={(bloodType) => this.setState({bloodType})}
          value={this.state.bloodType}
          placeholder="Tipo Sanguineo"
          placeholderTextColor="#FFF"
        />

        <OpacityButton
          text="CONTINUAR"
          onPress={() => false}
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
