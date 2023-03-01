import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    list:{
        height:Dimensions.get("window").height/1.35,
        marginTop:10
    },
    todo:{
        backgroundColor:"#72B896",
        padding:5,
        margin:3,
        marginHorizontal:10,
        borderRadius:3,
        color:"white",
        fontWeight:"bold"
    },
    title :{
        fontSize:40,
        color:"#FFBF00"
    },
    titlePosition:{
       flexDirection:"row",
       justifyContent:"space-between", 
       marginHorizontal:7
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3',
      },
      buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'white',
      },
})