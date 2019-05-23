import * as React from 'react';
import { View, Button, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import Modal from "react-native-modal";
import { deviceHeight } from '../../common/style';

export enum MODAL_TYPE {
    CONFIRM = 0,
    ALERT
}

interface IProps{
    isVisible: boolean,
    type: MODAL_TYPE,
    title: string,
    message: string,
    handleConfirm?: () => void,
    handleCancel?: () => void,
}

export class ModalComponent extends React.Component<IProps, any>{
    confirm = () => {
        if(this.props.handleConfirm){
            this.props.handleConfirm();
        }
    }

    cancel = () => {
        if(this.props.handleCancel){
            this.props.handleCancel();
        }
    }
    
    renderButton(){
        switch(this.props.type){
            case MODAL_TYPE.ALERT:
                return this.renderAlertButton();
            case MODAL_TYPE.CONFIRM:
                return this.renderConfirmButton();
            default: return null;
        }
    }

    renderConfirmButton(){
        return(
            <View style={styles.buttonContainer}>
                <Button 
                    onPress={this.cancel}
                    style={styles.button}
                >
                    <Text 
                        style={styles.cancelText}
                    >Cancel</Text>
                </Button>
                <View style={styles.divider}></View>
                <Button 
                    onPress={this.confirm}
                    style={styles.button}
                >
                    <Text 
                        style={styles.confirmText}
                    >Confirm</Text>
                </Button>
            </View>
        )
    }

    renderAlertButton(){
        return(
            <View 
                style={styles.buttonContainer}>
                <Button
                    style={styles.button}
                    onPress={this.confirm}
                >
                    <Text 
                        style={styles.confirmText}
                    >OK</Text>
                </Button>
            </View>
        )
    }

    render(){
        return(
            <Modal
                animationIn='fadeIn'
                animationOut='fadeOut'
                isVisible={this.props.isVisible}
                backdropOpacity={0.3}
                onBackButtonPress={this.cancel}
                onBackdropPress={this.cancel}
                deviceHeight={deviceHeight}
            >
                <View style={styles.modal}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>{this.props.title}</Text>
                    </View>
                    <View style={styles.messageContainer}>
                        <Text style={styles.message}>{this.props.message}</Text>
                    </View>
                    {this.renderButton()}
                </View>
            </Modal>
        )
    }
}


const styles = StyleSheet.create({
    modal: {
        alignSelf: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 100,
        width: 250,
        borderRadius: 10,
        overflow: 'hidden',
    },
    titleContainer:{
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    titleText:{
        paddingTop: 10,
        fontWeight: 'bold',
        fontSize: 16,
    },
    messageContainer:{
        paddingHorizontal: 15,
        paddingBottom: 15,
        width: '100%',
    },
    message:{
        fontSize: 13,
        textAlign: 'center'
    },
    buttonContainer: {
        height: 50,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    button: {
        height: '100%',
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cancelText:{
        fontWeight: 'bold',
        color: 'red'
    },
    confirmText: {
        fontWeight: 'bold',
        color: 'rgb(74, 143, 246)'
    },
    divider: {
        height: '100%',
        width: 1,
        backgroundColor: '#ccc'
    }
})