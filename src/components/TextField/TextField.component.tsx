import React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "./TextField.style";
import { TextFieldProps } from "./types";
import { FormDataType } from "../../utils/types";

const TextField = ({
  label,
  name,
  setFormData,
  formData,
  keyboardType,
  placeholder,
  ref,
  submitConfig,
}: TextFieldProps) => {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}:</Text>
      <TextInput
        ref={ref}
        style={styles.input}
        keyboardType={keyboardType}
        placeholder={placeholder}
        returnKeyType={submitConfig.returnKeyType}
        submitBehavior={submitConfig.submitBehavior}
        onSubmitEditing={submitConfig.onSubmitEditing}
        onChangeText={data => setFormData({ ...formData, [name]: data })}
        value={formData[name as keyof FormDataType]}
      />
    </View>
  );
};

export default TextField;
