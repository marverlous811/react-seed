import { StyleSheet, Dimensions, Platform } from "react-native";

const deviceHeight = Platform.OS === 'ios' ? 
    Dimensions.get('window').height : 
    require('react-native-extra-dimensions-android').get("REAL_WINDOW_HEIGHT");
    
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