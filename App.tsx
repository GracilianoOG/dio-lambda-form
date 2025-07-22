import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/Home/HomeScreen.component";
import FormScreen from "./src/screens/Form/FormScreen.component";

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={HomeScreen}></Screen>
        <Screen name="Form" component={FormScreen}></Screen>
      </Navigator>
    </NavigationContainer>
  );
}
