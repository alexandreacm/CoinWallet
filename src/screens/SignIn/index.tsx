import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as Animatable from 'react-native-animatable';

import { styles } from './styles';

export default function SignIn() {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={600} style={styles.containerHeader}>
        <Text style={styles.message}>Welcome</Text>
      </Animatable.View>

      <Animatable.View style={styles.containerForm} animation="fadeInDown">
        <Text style={styles.title}>Email</Text>
        <TextInput style={styles.input} placeholder="email" />

        <Text style={styles.title}>Password</Text>
        <TextInput style={styles.input} placeholder="password" />

        <TouchableOpacity onPress={() => navigate('Home')} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister}>
          <Text style={styles.registerText}>Don't have an account yet?</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
