import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes'

export default StyleSheet.create({
  container: {
    paddingTop: 70,
    backgroundColor: Colors.backgroundRed,
    flex: 1,
    alignItems: 'stretch'
  },
  row: {
    paddingVertical: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin
  },
  avatar: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: 150,
    width: 150,
    backgroundColor: "#FFF",
    marginHorizontal: 15
  },
  button: {
    marginTop: 25
  },
  addressRow: {
    flexDirection: 'row'
  },
  uf: {
    flexGrow: 0.15,
    marginRight: 15
  },
  city: {
    flexGrow: 0.85,
    marginLeft: 0
  }
})
