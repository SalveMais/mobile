import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes'

export default StyleSheet.create({
  container: {
    paddingTop: 70,
    backgroundColor: Colors.backgroundRed,
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  row: {
    paddingVertical: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin
  },
  topLogo: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: 55,
    marginBottom: 30
  }
})
