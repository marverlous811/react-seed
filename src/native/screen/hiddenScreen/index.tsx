import * as React from 'react'
import { View } from 'native-base';
import UIStore from '../../../store/UIStore';
import { ModalComponent } from '../../component/modalComponent';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';

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

        return(
            <View>
                <ModalComponent {...modalProps} />
            </View>
        )
    }
}