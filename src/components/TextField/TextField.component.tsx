import React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "./TextField.style";
import { TextFieldProps } from "./types";

const TextField = ({
  label,
  name,
  setFormData,
  formData,
  keyboardType,
  placeholder,
}: TextFieldProps) => {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}:</Text>
      <TextInput
        style={styles.input}
        keyboardType={keyboardType}
        placeholder={placeholder}
        onChangeText={data => setFormData({ ...formData, [name]: data })}
        value={formData.name}
      />
    </View>
  );
};

export default TextField;
