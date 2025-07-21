import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/lambda.png")} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Open form</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#fa7e14",
    borderRadius: 8,
    marginTop: 90,
    padding: 12,
    width: 200,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 4,
  },
});
