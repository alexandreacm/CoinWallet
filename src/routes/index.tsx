import React, { useState, useEffect } from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import HomeStack from './stacks/HomeStack';
import AuthStack from './stacks/AuthStack';
import { BottomTab } from './tabs/BottomTab';

import { saveUser } from '../../src/constants/storage';
// import { useFocusEffect } from '@react-navigation/native';
// import { AuthProps } from '@screens/SignIn';

export default function Routes() {
  const { getItem } = useAsyncStorage(saveUser);
  // const [user, setUser] = useState<AuthProps>({} as AuthProps);
  const [user, setUser] = useState<string | null>('');

  async function loadData() {
    const response = await getItem();
    console.log('response: ', response);

    //const data = response ? JSON.parse(response) : '';
    setUser(response);
  }

  useEffect(() => {
    loadData();
  }, []);

  return user !== null ? <HomeStack /> : <AuthStack />;
}
