import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderWidth: 1,
        marginVertical: 3,
        marginHorizontal: 5
    },
    containerRowCard: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection:'row',
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
      },
   });