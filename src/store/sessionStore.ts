import { observable, action } from "mobx";

export default class SessionStore{
    @observable username : string = '';
    @observable password : string = '';
    
    @action login = async () => {
        //TODO: call API

        
    }
}