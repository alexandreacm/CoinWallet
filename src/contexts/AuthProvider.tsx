import React, { createContext, useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AuthProps } from '@screens/SignIn';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { saveUser } from '../constants/storage';

const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

function AuthProvider({ children }: any) {
  const { getItem, setItem } = useAsyncStorage(saveUser);

  const [user, setUser] = useState<AuthProps>({} as AuthProps);
  const { navigate } = useNavigation();

  async function signIn(email: string, password: string) {
    console.log(`Email: ${email} / Pass: ${password}`);

    if (email === '' && password === '') return;

    if (email !== '' && password !== '') {
      setUser({
        email,
        status: true,
        logged: true,
      });

      await setItem(email);
      navigate('HomeLogged');
    }
  }

  return <AuthContext.Provider value={{ signIn, user }}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
