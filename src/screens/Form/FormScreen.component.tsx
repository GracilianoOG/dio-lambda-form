import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Alert, Image } from "react-native";
import { styles } from "./FormScreen.style";
import TextField from "../../components/TextField/TextField.component";
import { FormDataType } from "../../utils/types";

const FormScreen = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = () => {
    console.log(
      `Your data: \nName: ${formData.name}\nE-mail: ${formData.email}\nMessage: ${formData.message}`
    );
  };

  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 64,
          height: 64,
          marginBottom: 32,
          alignSelf: "flex-start",
        }}
        source={require("../../../assets/lambda.png")}
      />
      <TextField
        label="Name"
        name="name"
        setFormData={setFormData}
        formData={formData}
        keyboardType="name-phone-pad"
        placeholder="John Doe"
      />
      <TextField
        label="E-mail"
        name="email"
        setFormData={setFormData}
        formData={formData}
        keyboardType="email-address"
        placeholder="email@example.com"
      />
      <View style={styles.field}>
        <Text style={styles.label}>Message: </Text>
        <TextInput
          style={styles.input}
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          placeholder="Message here..."
          onChangeText={message => setFormData({ ...formData, message })}
          value={formData.message}
        />
      </View>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </View>
  );
};

export default FormScreen;
