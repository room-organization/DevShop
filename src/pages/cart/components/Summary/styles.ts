import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: "space-between",
    alignItems: "stretch",
    flex: 1,
    borderWidth: 1,
    borderColor: "#e6e6e6",
    borderRadius: 8,
    marginTop: 20,
  },

  total: {
    borderTopWidth: 1,
    borderColor: "#e6e6e6",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  label: {
    fontSize: 18,
  },

  price: {
    fontSize: 20,
    color: "#40BFFF",
    fontWeight: "bold",
  },

  input: {
    paddingLeft: 10,
  },

 
});
