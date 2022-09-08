import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

import * as Animatable from "react-native-animatable";

import { COLORS } from "../../theme";

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={600}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Bem vindo(a)</Text>
      </Animatable.View>

      <Animatable.View style={styles.containerForm} animation="fadeInDown">
        <Text style={styles.title}>Email</Text>
        <TextInput style={styles.input} placeholder="Digite seu email" />

        <Text style={styles.title}>Senha</Text>
        <TextInput style={styles.input} placeholder="Digite sua senha" />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister}>
          <Text style={styles.registerText}>
            Não possui uma conta? Cadastre-se
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_COLOR,
  },
  containerHeader: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: "5%",
  },
  message: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.FORM,
  },
  containerForm: {
    flex: 1,
    backgroundColor: COLORS.FORM,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    width: "100%",
    height: 40,
    borderBottomWidth: 1,
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    width: "100%",
    borderRadius: 8,
    backgroundColor: COLORS.PRIMARY_COLOR,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.FORM,
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: "center",
  },
  registerText: {
    color: COLORS.SUB_TITLE,
  },
});
