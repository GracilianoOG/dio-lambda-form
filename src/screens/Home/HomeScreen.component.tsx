import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./HomeScreen.style";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Home: undefined;
  Form: undefined;
};

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
};

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
    </View>
  );
};

export default HomeScreen;
