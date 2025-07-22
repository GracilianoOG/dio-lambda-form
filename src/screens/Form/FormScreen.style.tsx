import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    gap: 28,
    justifyContent: "center",
  },
  field: {
    width: "80%",
  },
  label: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 8,
    textAlign: "left",
    textTransform: "uppercase",
  },
  input: {
    borderWidth: 1,
    borderColor: "#9c9c9cff",
    padding: 16,
  },
});
