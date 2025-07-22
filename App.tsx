import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/Home/HomeScreen.component";
import FormScreen from "./src/screens/Form/FormScreen.component";

const { Navigator, Screen } = createNativeStackNavigator();

const sharedOptions: NativeStackNavigationOptions = {
  headerStyle: { backgroundColor: "#fa7e14" },
  headerTitleStyle: { color: "#fff" },
  headerTitleAlign: "center",
};

const formScreenOptions: NativeStackNavigationOptions = {
  headerTitle: "Message Us",
};

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
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
    </NavigationContainer>
  );
}
