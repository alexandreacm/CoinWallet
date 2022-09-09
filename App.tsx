import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes';

import theme from './src/theme';

import ThemeProvider from '@components/ThemeProvider';

export default function App() {
  return (
    <>
      <StatusBar style="inverted" backgroundColor={theme.COLORS.PRIMARY_COLOR} />

      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
}
