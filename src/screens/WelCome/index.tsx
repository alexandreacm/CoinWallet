import React from "react";
import { useNavigation } from "@react-navigation/native";

import { View, Text, Image, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

import icLogo from "../../assets/images/logo.jpg";
import { styles } from "./styles";

export default function WelCome() {
  const { navigate } = useNavigation();

  function onHandleNavigate() {
    navigate("signin");
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={icLogo}
          resizeMode="contain"
        />
      </View>

      <Animatable.View
        delay={600}
        animation="fadeInUp"
        style={styles.containerForm}
      >
        <Text style={styles.title}>
          Monitore, Organize seus gastos de qualquer lugar
        </Text>
        <Text style={styles.subTitle}>Faça o login para começar</Text>

        <TouchableOpacity style={styles.button} onPress={onHandleNavigate}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
