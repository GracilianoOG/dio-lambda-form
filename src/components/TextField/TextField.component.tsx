import React from "react";
import { KeyboardTypeOptions, Text, TextInput, View } from "react-native";
import { styles } from "./TextField.style";
import { FormDataType } from "../../utils/types";

type TextFieldProps = {
  label: string;
  name: string;
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
  keyboardType: KeyboardTypeOptions;
  placeholder: string;
};

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
