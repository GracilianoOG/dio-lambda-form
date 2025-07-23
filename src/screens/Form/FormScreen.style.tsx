import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    gap: 28,
    justifyContent: "center",
    padding: 32,
  },
  button: {
    backgroundColor: "#fa7e14",
    padding: 14,
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    letterSpacing: 2.5,
    textAlign: "center",
    textTransform: "uppercase",
  },
  buttonPressed: {
    backgroundColor: "#d86f12ff",
  },
  logo: {
    alignSelf: "flex-start",
    height: 64,
    marginBottom: 32,
    width: 64,
  },
});
