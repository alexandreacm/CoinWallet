import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import welCome from '../../screens/WelCome';

function HomeStack() {
  return (
    <Navigator>
      <Screen
        options={{
          headerShown: false,
        }}
        name="welCome"
        component={welCome}
      />
    </Navigator>
  );
}

export default HomeStack;
