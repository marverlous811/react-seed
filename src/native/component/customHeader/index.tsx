import * as React from 'react';
import { View, Header, Left, Body, Right, Text } from 'native-base';
import { StyleSheet } from 'react-native';

interface IProps{
    title: string,
    left?: any,
    right?: any,
}

export default class CustomHeader extends React.PureComponent<IProps,any>{
    render(){
        return(
            <View style={styles.container}>
                <Header style={styles.header}>
                    <Left style={styles.left}>{this.props.left ? this.props.left : null}</Left>
                    <Body style={styles.body}>
                        <Text style={styles.title}>{this.props.title}</Text>
                    </Body>
                    <Right>{this.props.right ? this.props.right : null}</Right>
                </Header>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F1F1F1',
        width: '100%'
    },
    header: {
        paddingLeft: 0,
        paddingRight: 0,
        borderBottomWidth: 0,
        height: 64,
    },
    left: {
        flex: 1,
    },
    body: {
        flex: 3,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    right: {
        flex: 1
    },
    title: {
        fontSize: 17,
        lineHeight: 20,
        color: "#FFFFFF",
        width: "100%",
        textAlign: 'center'
    }
})