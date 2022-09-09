import React from 'react';
import { Platform } from 'react-native';

import { useTheme } from 'styled-components/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Ionicons } from '@expo/vector-icons';

const { Navigator, Screen } = createBottomTabNavigator();

import { Home } from '@screens/Home';

export function BottomTab() {
  const COLORS = useTheme();

  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.PRIMARY_COLOR,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 0 : 0,
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color }) => <Entypo name="home" size={25} color={color} />,
        }}
      />
      <Screen
        name="Wallet"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color }) => <Entypo name="wallet" size={25} color={color} />,
        }}
      />
      <Screen
        name="History"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color }) => <Ionicons name="timer" size={25} color={color} />,
        }}
      />
      <Screen
        name="Discounts"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color }) => <Entypo name="compass" size={25} color={color} />,
        }}
      />
    </Navigator>
  );
}
