import * as React from 'react'
import { View } from 'native-base';
import UIStore from '../../../store/UIStore';
import { ModalComponent } from '../../component/modalComponent';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';
import Spinner from 'react-native-loading-spinner-overlay';
import { StyleSheet } from 'react-native';
import ToastComponent from '../../component/toastComponent';

interface IProps{
    uiStore?: UIStore
}

@inject('uiStore')
@observer
export default class HiddenScreen extends React.Component<IProps, any>{
    render(){
        const saveModalProps = toJS(this.props.uiStore!.modal);
        const modalProps = {
            isVisible: toJS(this.props.uiStore!.isModalShowing),
            ...saveModalProps,
        }
        const loadingProps = toJS(this.props.uiStore!.shouldShowLoading);
        const loadingContent = toJS(this.props.uiStore!.currentLoadingMessage);
        
        return(
            <View>
                <Spinner 
                    visible={loadingProps} 
                    textContent={loadingContent}
                    textStyle={styles.text} 
                    color={'white'} 
                    overlayColor={"rgba(0,0,0,0.5)"} 
                />
                <ModalComponent {...modalProps} />
                <ToastComponent uiStore={this.props.uiStore}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'white'
    }
})