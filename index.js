/**
 * @format
 */

import {AppRegistry} from 'react-native';
import BootApp from './src/native/boot';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => BootApp);
