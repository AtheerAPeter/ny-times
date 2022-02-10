import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from 'reactotron-react-native';
import {NativeModules} from 'react-native';

let scriptHostname;
if (__DEV__) {
  const scriptURL = NativeModules.SourceCode.scriptURL;
  scriptHostname = scriptURL.split('://')[1].split(':')[0];
}

Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: 'Club Feast User App',
    host: scriptHostname,
  })
  .useReactNative({
    asyncStorage: false,
    networking: {
      ignoreUrls: /symbolicate|generate_204/,
    },
    editor: false,
    errors: {veto: () => false},
    overlay: false,
  })
  .connect();
