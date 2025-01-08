import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  
    container: {
        flex: 1,
        backgroundColor: '#040404',
        alignItems: 'center',
    },

    logo: {
        alignSelf: "center",
        resizeMode: "contain",
        height: 170,
        width: 270,
        marginTop: "12%",
    },

    voltar: {
        
        height: 40,
        aspectRatio: 1,
  
    },

    titleView: {
        height: "20%",
        width: "100%",
        backgroundColor: '#D7D9CE',
        alignItems: 'center',
        justifyContent: "center",
    
    },

    workView: {
        height: "80%",
        width: "100%",
        backgroundColor: '#D7D9CE',
        alignItems: 'center',
        paddingTop: "10%"
    },

    respMenuView: {
        paddingLeft: "5%",
        paddingRight: "5%",
        flexDirection: "row",
        justifyContent: "space-between",
        height: "8%",
        width: "100%",
    },

    questionsView: {
        height: "95%",
        width: "90%",
        paddingTop: "5%",
        backgroundColor: '#D7D9CE',
        borderWidth: 2,
        borderColor: '#0C7489',
        borderRadius: 10
    },

    checkBoxesView: {
        flexDirection: "row",
        height: "35%",
        width: "95%",
        alignSelf: "center",
        marginTop: "2%",
    },

    halfCheckBoxView: {
        height: "100%",
        width: "50%",
    },

    BoxView: {
        flexDirection: "row",
        height: "20%",
        width: "100%",
        alignItems: "center",
    },

    loadingView: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },

    checkBox: {
        width: "15%",
        aspectRatio: 1,
        borderWidth: 2,
        alignSelf: "center",
        borderRadius: 5,
        borderColor: "#040404",
        marginRight: "2%",
    },

    selectedCheckBox: {
        backgroundColor: "#0C7489",
    },

    slider: {
        width: "80%",
        alignSelf: "center"
    },

    trainTitle: {
        color: "#0C7489",
        fontSize: 30,
        fontFamily: "Vietnam-SemiBold",
    },

    trainText: {
        marginTop: "2%",
        marginLeft: "5%",
        marginRight: "5%",
        color: "#000",
        fontSize: 12,
        fontFamily: "Vietnam-SemiBold",
    },


    label: {
        color: "#000",
        fontSize: 13,
        fontFamily: "Vietnam-SemiBold",
        marginLeft: "3%",
    },

    loadingText: {
        color: "#0C7489",
        fontSize: 20,
        fontFamily: "Vietnam-SemiBold",
        marginBottom: "5%",
    },

    button: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        width: 250,
        borderWidth: 3,
        borderColor: "#0C7489",
        borderRadius: 10,
        marginTop: "-12%"
      },
    
      buttonText: {
        fontSize: 20,
        fontFamily: "Vietnam-Bold",
        color: "#0C7489",
      },
});
