import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const heightWidth = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    container: {
        width: (screenWidth - (screenWidth/2)),
        height: (heightWidth/6),
        backgroundColor: '#BE8981',
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 7,
        marginHorizontal: 5,
        alignItems:"center",
        justifyContent: "center"
    },
    
    title: {
        color: 'black',
        fontSize: 30,
        fontWeight: "bold",
        alignSelf: 'flex-start',
        marginLeft:15,
      },
      containerRowCard: {
        display: "flex",
        flexDirection:'row',
    },
   });