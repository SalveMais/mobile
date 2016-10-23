import React, { Component, PropTypes } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import _styles from './Styles/OpacityButtonStyles'

const OpacityButton = ({styles, onPress, text}) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={[_styles.opacityButton, styles]}>{text}</Text>
  </TouchableOpacity>
)

OpacityButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}

export default OpacityButton
