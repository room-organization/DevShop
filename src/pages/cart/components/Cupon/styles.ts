import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 56,
    justifyContent: "space-between",
    alignItems: "stretch",
    flex: 1,
    borderWidth: 1,
    borderColor: "#e6e6e6",
    borderRadius: 8,
    marginTop: 20,
  },


  input: {
    paddingLeft: 10,
  },

  button: {
    backgroundColor: "#3C5A5D",
    justifyContent: "center",
    alignItems: "center",
    width: 90,
    borderBottomEndRadius: 8,
    borderTopEndRadius: 8,
  },

  textButton: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF"
  },
});
