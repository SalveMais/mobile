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
import Styles from './Styles/AvatarListScreenStyles'
import { Images } from '../Themes'

import LoginActions from '../Redux/LoginRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'

class AvatarList extends React.Component {

  constructor (props) {
    super(props)

  }

  render () {
    return (
      <View style={[Styles.container]} keyboardShouldPersistTaps>
        <View style={Styles.row}>
          <TouchableOpacity onPress={ NavigationActions.user_setup }>
            <Image source={Images.base_avatar} style={[Styles.avatar]} />
          </TouchableOpacity>

          <TouchableOpacity onPress={ NavigationActions.user_setup }>
            <Image source={Images.base_avatar} style={[Styles.avatar]} />
          </TouchableOpacity>
        </View>

        <View style={Styles.row}>
          <TouchableOpacity onPress={ NavigationActions.user_setup }>
            <Image source={Images.base_avatar} style={[Styles.avatar]} />
          </TouchableOpacity>

          <TouchableOpacity onPress={ NavigationActions.user_setup }>
            <Image source={Images.base_avatar} style={[Styles.avatar]} />
          </TouchableOpacity>
        </View>

      </View>
    )
  }

}

AvatarList.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(AvatarList)
