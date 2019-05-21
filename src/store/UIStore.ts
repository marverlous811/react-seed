import {observable, action, computed} from 'mobx';

interface ILoadingData{
    id: string,
    message: string,
}

export default class UIStore{
    //loading screen
    @observable loading: boolean = false;
    @observable loadingContent : string = '';
    @observable loadingMap : Map<string, ILoadingData> = new Map();

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
}