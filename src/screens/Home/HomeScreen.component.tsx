import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./HomeScreen.style";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/lambda.png")} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Open form</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
