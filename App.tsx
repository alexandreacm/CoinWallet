import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes';

import ThemeProvider from '@components/ThemeProvider';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#6495ED" barStyle="light-content" />

      <ThemeProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
}
