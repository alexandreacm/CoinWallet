import React from 'react';
import { Platform } from 'react-native';

import { useTheme } from 'styled-components/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Ionicons, FontAwesome } from '@expo/vector-icons';

const { Navigator, Screen } = createBottomTabNavigator();

import { MaterialTopTab } from '../tabs/MaterialTopTab';

import { Home } from '@screens/Home';
import { Wallet } from '@screens/Wallet';
import { QrCode } from '@screens/QrCode';
import { History } from '@screens/History';
import { Transfer } from '@screens/Transfer';

import { CustomTabButton } from '@components/CustomTabButton';

export function BottomTab() {
  const COLORS = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.PRIMARY_COLOR,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 0 : 0,
        },
      }}
    >
      <Screen
        name="Home"
        component={MaterialTopTab}
        options={{
          tabBarIcon: ({ focused, color }) => <Entypo name="home" size={25} color={color} />,
        }}
      />
      <Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({ focused, color }) => <Entypo name="wallet" size={25} color={color} />,
        }}
      />
      <Screen
        name="QrCode"
        component={QrCode}
        options={{
          title: '',
          tabBarIcon: () => <CustomTabButton />,
        }}
      />
      <Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({ focused, color }) => <Ionicons name="timer" size={25} color={color} />,
        }}
      />
      <Screen
        name="Tranfer"
        component={Transfer}
        options={{
          tabBarIcon: ({ focused, color }) => <FontAwesome name="money" size={25} color={color} />,
        }}
      />
    </Navigator>
  );
}
