import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes'

export default StyleSheet.create({
  container: {
    paddingTop: 70,
    backgroundColor: Colors.backgroundRed,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    height: 150,
    flexDirection: 'row'
  },
  avatar: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: 150,
    width: 150,
    backgroundColor: "#FFF",
    marginHorizontal: 15
  }
})
