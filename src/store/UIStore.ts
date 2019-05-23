import {observable, action, computed} from 'mobx';
import { MODAL_TYPE } from '../native/component/modalComponent';

interface ILoadingData{
    id: string,
    message: string,
    timeout?: number,
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
    loadingTimeout : any = {};

    //modal
    @observable isModalShowing : boolean = false;
    @observable modal : Modal = new Modal();

    //toast
    @observable toastMessage : string = '';

    public static instance : UIStore;
    public static getInstance(){
        if(!this.instance){
            this.instance = new UIStore;
        }

        return this.instance;
    }
    private constructor(){}

    @action showLoading(id: string, message: string, timeout?: number, callback?: any){
        const loading : ILoadingData = {
            id, message
        }
        if(!this.loadingMap.has(id)){
            this.loadingMap.set(id, loading);
        }

        if(timeout){
            const timeoutId = setTimeout(() => {
                this.hideLoading(id, callback);
            }, timeout);

            this.loadingTimeout[id] = timeoutId;
        }
    }

    @action hideLoading(id: string, callback?: any){
        if(this.loadingMap.has(id)){
            this.loadingMap.delete(id);
        }

        clearTimeout(this.loadingTimeout[id]);
        delete this.loadingTimeout[id];

        if(callback){
            callback();
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

    @computed
    get shouldShowLoading() {
        return this.loadingMap.size > 0;
    }

    @computed
    get currentLoadingMessage() {
        const loadingMessages = Array.from(this.loadingMap.values());
        if (loadingMessages.length > 0) {
            return loadingMessages[loadingMessages.length - 1].message;
        }
        return '';
    }

    @action
    showToast(message: string) {
        this.toastMessage = message;
    }
}