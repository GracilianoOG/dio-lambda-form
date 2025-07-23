import React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "./TextArea.style";
import { TextAreaProps } from "./types";
import { FormDataType } from "../../utils/types";

const TextArea = ({
  label,
  name,
  formData,
  setFormData,
  keyboardType,
  placeholder,
  numberOfLines,
  maxLength,
  ref,
  submitConfig,
}: TextAreaProps) => {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}:</Text>
      <TextInput
        style={styles.input}
        editable
        multiline
        numberOfLines={numberOfLines}
        maxLength={maxLength}
        keyboardType={keyboardType}
        placeholder={placeholder}
        onChangeText={data => setFormData({ ...formData, [name]: data })}
        value={formData[name as keyof FormDataType]}
        ref={ref}
        returnKeyType={submitConfig.returnKeyType}
        submitBehavior={submitConfig.submitBehavior}
        onSubmitEditing={submitConfig.onSubmitEditing}
      />
    </View>
  );
};

export default TextArea;
