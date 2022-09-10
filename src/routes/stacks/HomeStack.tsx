import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import { BottomTab } from '../tabs/BottomTab';
import { Wallet } from '@screens/Wallet';
import { Transfer } from '@screens/Transfer';

function HomeStack() {
  return (
    <Navigator>
      <Screen
        name="HomeLogged"
        component={BottomTab}
        options={{
          title: '',
          header: () => {},
        }}
      />
      <Screen name="DetailCoin" component={Wallet} />
      <Screen name="Transfer" component={Transfer} />
    </Navigator>
  );
}

export default HomeStack;
