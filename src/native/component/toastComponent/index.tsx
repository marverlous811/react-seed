import * as React from 'react';
import UIStore from '../../../store/UIStore';
import { observer } from 'mobx-react';
import { intercept } from 'mobx';

const EasyToast = require('react-native-easy-toast');
const Toast = EasyToast.default;
const DURATION = EasyToast.DURATION;

interface IProps{
    uiStore?: UIStore
}

@observer
export default class ToastComponent extends React.Component<IProps, any>{
    toast : any = null;
    disposer : any = null;

    componentDidMount(){
        //@ts-ignore
        this.disposer = intercept(this.props.uiStore, 'toastMessage', change => {
            if (this.toast && !!change.newValue) {
                this.toast.show(change.newValue, DURATION.LENGTH_LONG);
            }
            return change;
        })
    }

    componentWillUnmount() {
        if (this.disposer) {
          this.disposer();
        }
    }

    setToast = (toast : any) => {
        this.toast = toast;
    }

    render(){
        return(
            <Toast
                ref={this.setToast}
                defaultCloseDelay={0}
                fadeInDuration={750}
                fadeOutDuration={1000}
            />
        );
    }
}