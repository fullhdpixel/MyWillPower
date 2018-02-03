import { AppRegistry } from 'react-native';
import App from './App/Containers/App.js';

import { registerScreens } from "./App/Navigation/screens"

AppRegistry.registerComponent('mywillpower', () => App);

registerScreens();