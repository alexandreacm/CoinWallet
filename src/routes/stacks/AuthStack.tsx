import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import WelCome from '../../screens/WelCome';
import SignIn from '../../screens/SignIn';
import { Wallet } from '../../screens/Wallet';
import { BottomTab } from '../tabs/BottomTab';

function HomeStack() {
  return (
    <Navigator>
      <Screen name="WelCome" component={WelCome} />
      <Screen name="SignIn" component={SignIn} />
      <Screen
        name="Home1"
        component={BottomTab}
        options={{
          title: '',
          header: () => {},
        }}
      />
      <Screen
        name="DetailCoin"
        component={Wallet}
        options={{
          title: '',
          header: () => {},
        }}
      />
    </Navigator>
  );
}

export default HomeStack;
