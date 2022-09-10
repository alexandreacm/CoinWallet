import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes';

import theme from './src/theme';

import ThemeProvider from '@components/ThemeProvider';
import store from './src/store/';
import AuthProvider from '@contexts/AuthProvider';

export default function App() {
  return (
    <>
      <StatusBar style="inverted" backgroundColor={theme.COLORS.PRIMARY_COLOR} />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <AuthProvider>
              <Routes />
            </AuthProvider>
          </NavigationContainer>
        </ThemeProvider>
      </Provider>
    </>
  );
}
