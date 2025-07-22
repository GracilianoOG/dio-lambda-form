import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    gap: 28,
    justifyContent: "center",
    padding: 32,
  },
  field: {
    width: "100%",
  },
  label: {
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 2.5,
    marginBottom: 8,
    textAlign: "left",
    textTransform: "uppercase",
  },
  input: {
    borderWidth: 1,
    borderColor: "#9c9c9cff",
    padding: 16,
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
});
