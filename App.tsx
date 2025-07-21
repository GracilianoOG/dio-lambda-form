import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/Home/HomeScreen.component";
import FormScreen from "./src/screens/Form/FormScreen.component";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="Form" component={FormScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
