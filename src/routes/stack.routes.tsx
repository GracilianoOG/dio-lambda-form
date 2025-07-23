import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen/HomeScreen.component";
import FormScreen from "../screens/FormScreen/FormScreen.component";

const { Navigator, Screen } = createNativeStackNavigator();

const sharedOptions: NativeStackNavigationOptions = {
  headerStyle: { backgroundColor: "#fa7e14" },
  headerTitleStyle: { color: "#fff" },
  headerTitleAlign: "center",
};

const formScreenOptions: NativeStackNavigationOptions = {
  headerTitle: "Message Us",
};

const StackRoutes = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={HomeScreen}
        options={sharedOptions}
      ></Screen>
      <Screen
        name="Form"
        component={FormScreen}
        options={{ ...sharedOptions, ...formScreenOptions }}
      ></Screen>
    </Navigator>
  );
};

export default StackRoutes;
