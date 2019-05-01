import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { StatusBar } from 'react-native';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
      <Routes />
    </>
  );
}

export default App;
