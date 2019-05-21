import { Provider } from 'mobx-react';
import * as React from 'react';
import store from '../store';
import App from './app';

export default class BootApp extends React.Component{
    render(){
        return(
            <Provider {...store}>
                <App/>
            </Provider>
        )
    }
}