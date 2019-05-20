/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/native/app';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
