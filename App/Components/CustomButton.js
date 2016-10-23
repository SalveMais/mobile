import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Colors, Metrics } from '../Themes'

import styles from './Styles/CustomButtonStyles'

import Icon from 'react-native-vector-icons/FontAwesome'


const CustomButton = ({ icon, text, onPress }) =>(
  <TouchableOpacity onPress={onPress}>
    <View style={styles.button} >
      <View style={styles.button_icon}>
        <Icon name={icon}
          size={Metrics.icons.small}
          color={Colors.snow}
        />
      </View>
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
)

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}

export default CustomButton
