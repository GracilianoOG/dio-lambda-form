import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./HomeScreen.style";
import { StatusBar } from "expo-status-bar";
import { HomeScreenProps } from "./types";

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/lambda.png")} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Form")}
      >
        <Text style={styles.buttonText}>Open form</Text>
      </TouchableOpacity>
      <StatusBar style="light" />
    </View>
  );
};

export default HomeScreen;
