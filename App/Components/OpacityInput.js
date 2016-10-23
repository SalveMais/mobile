import React, { PropTypes } from 'react'
import { View, TextInput } from 'react-native'

import styles from './Styles/OpacityInputStyles'

const OpacityInput = (props) => {
  let { style, ...others} = props;

  return (<TextInput {...others} style={[styles.opacityInput, style]}/>)
}

OpacityInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired
}

OpacityInput.defaultProps = {
  style: {}
}

export default OpacityInput
