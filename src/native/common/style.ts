import { StyleSheet, Dimensions } from "react-native";

const deviceHeight = Dimensions.get('window').height;
const deviceWeight = Dimensions.get('window').width;

const commonStyle = StyleSheet.create({
    btn: {
        marginTop: 20,
        alignSelf: 'center',
    },
    input: {
        marginBottom: 20,
    },
    container:{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FBFAFA',
    },
    bg: {
        flex: 1,
    }
});

export {
    deviceHeight,
    deviceWeight,
    commonStyle
}