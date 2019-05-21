import { Provider } from 'mobx-react';
import * as React from 'react';
import store from '../store';
import App from './app';
import { StyleProvider } from 'native-base';
import getTheme from '../../native-base-theme/components';
import platform from '../../native-base-theme/variables/platform';

export default class BootApp extends React.Component{
    render(){
        return(
            <StyleProvider style={getTheme(platform)}>
                <Provider {...store}>
                    <App/>
                </Provider>
            </StyleProvider>
        )
    }
}