import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import WelCome from '../../screens/WelCome';
import SignIn from '../../screens/SignIn';

function HomeStack() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="WelCome" component={WelCome} />
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
}

export default HomeStack;
