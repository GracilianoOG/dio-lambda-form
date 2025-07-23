import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Alert, Image } from "react-native";
import { styles } from "./FormScreen.style";
import TextField from "../../components/TextField/TextField.component";
import { FormDataType } from "../../utils/types";
import TextArea from "../../components/TextArea/TextArea.component";

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
      <TextArea
        label="Message"
        name="message"
        setFormData={setFormData}
        formData={formData}
        placeholder="Message here..."
        numberOfLines={4}
        maxLength={40}
      />
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
