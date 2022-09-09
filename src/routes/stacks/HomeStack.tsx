import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import welCome from '../../screens/WelCome';
import SignIn from '../../screens/SignIn';
import { BottomTab } from '../tabs/BottomTab';

function HomeStack() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="welCome" component={welCome} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={BottomTab} />
    </Navigator>
  );
}

export default HomeStack;
