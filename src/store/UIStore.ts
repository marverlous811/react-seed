import {observable, action, computed} from 'mobx';
import { MODAL_TYPE } from '../native/component/modalComponent';

interface ILoadingData{
    id: string,
    message: string,
}

class Modal{
    type : MODAL_TYPE = MODAL_TYPE.ALERT;
    title: string = '';
    message: string = '';
    handleCancel: () => void | undefined = () => {};
    handleConfirm: () => void | undefined = () => {};

    setType = (type: MODAL_TYPE) => {
        this.type = type;
        return this;
    }

    setTitle = (title: string) => {
        this.title = title;
        return this;
    }

    setMessage = (message: string) => {
        this.message = message;
        return this;
    }

    setHandle = (handleCancel?: any, handleConfirm?: any) => {
        this.handleCancel = handleCancel;
        this.handleConfirm = handleConfirm

        return this;
    }
}

export default class UIStore{
    //loading screen
    @observable loading: boolean = false;
    @observable loadingContent : string = '';
    @observable loadingMap : Map<string, ILoadingData> = new Map();

    //modal
    @observable isModalShowing : boolean = false;
    @observable modal : Modal = new Modal();

    public static instance : UIStore;
    public static getInstance(){
        if(!this.instance){
            this.instance = new UIStore;
        }

        return this.instance;
    }
    private constructor(){}

    @action showLoading(id: string, message: string){
        const loading : ILoadingData = {
            id, message
        }
        if(!this.loadingMap.has(id)){
            this.loadingMap.set(id, loading);
        }
    }

    @action hideLoading(id: string){
        if(this.loadingMap.has(id)){
            this.loadingMap.delete(id);
        }
    }

    @action showModal(type: MODAL_TYPE, 
        title: string, 
        message: string, 
        handleCancel?: () => void, 
        handleConfirm?: () => void ){

        const _handleCancel = this.handleWithHidden(handleCancel);
        const _handleConfirm = this.handleWithHidden(handleConfirm);


        this.modal.setType(type)
                  .setMessage(message)
                  .setTitle(title)
                  .setHandle(_handleCancel,_handleConfirm);

        this.isModalShowing = true;
    }

    handleWithHidden(handle?: () => void){
        const _handle = () => {
            if(handle){
                handle();
            }
            this.hideModal();
        };

        return _handle;
    }

    @action hideModal(){
        this.isModalShowing = false;
    }
}