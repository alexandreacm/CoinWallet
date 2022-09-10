import React, { createContext, useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AuthProps } from '@screens/SignIn';

const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

function AuthProvider({ children }: any) {
  const [user, setUser] = useState<AuthProps>({} as AuthProps);
  const { navigate } = useNavigation();

  function signIn(email: string, password: string) {
    console.log(`Email: ${email} / Pass: ${password}`);

    if (email === '' && password === '') return;

    if (email !== '' && password !== '') {
      setUser({
        email,
        status: true,
        logged: true,
      });

      navigate('HomeLogged');
    }
  }

  return <AuthContext.Provider value={{ signIn, user }}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
