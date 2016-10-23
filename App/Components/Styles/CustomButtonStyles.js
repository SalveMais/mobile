import { Metrics, Colors, Fonts } from '../../Themes'

export default {
  text: {
    ...Fonts.style.h5,
    color: Colors.snow,
    marginVertical: Metrics.baseMargin,
    flexGrow: 0.8,
    paddingLeft: 15,
  },
  button: {
    marginHorizontal: 45,
    borderWidth: 1,
    borderColor: "#FFF",
    flex: 1,
    flexDirection: "row"
  },
  button_icon: {
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
    borderRightColor: "#FFF",
    flexGrow: 0.2,
  }
}
