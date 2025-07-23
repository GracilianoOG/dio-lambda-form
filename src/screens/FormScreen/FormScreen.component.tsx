import React, { useRef, useState } from "react";
import {
  Text,
  Pressable,
  Image,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from "react-native";
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

  const nameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const messageRef = useRef<TextInput>(null);

  const handleSubmit = () => {
    console.log(
      `Your data: \nName: ${formData.name}\nE-mail: ${formData.email}\nMessage: ${formData.message}`
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Image
        style={styles.logo}
        source={require("../../../assets/lambda.png")}
      />
      <TextField
        label="Name"
        name="name"
        setFormData={setFormData}
        formData={formData}
        keyboardType="name-phone-pad"
        placeholder="John Doe"
        ref={nameRef}
        submitConfig={{
          returnKeyType: "next",
          submitBehavior: "submit",
          onSubmitEditing: () => emailRef.current?.focus(),
        }}
      />
      <TextField
        label="E-mail"
        name="email"
        setFormData={setFormData}
        formData={formData}
        keyboardType="email-address"
        ref={emailRef}
        placeholder="email@example.com"
        submitConfig={{
          returnKeyType: "next",
          submitBehavior: "submit",
          onSubmitEditing: () => messageRef.current?.focus(),
        }}
      />
      <TextArea
        label="Message"
        name="message"
        setFormData={setFormData}
        formData={formData}
        placeholder="Message here..."
        numberOfLines={4}
        maxLength={40}
        ref={messageRef}
        submitConfig={{
          returnKeyType: "done",
          submitBehavior: "blurAndSubmit",
        }}
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
    </KeyboardAvoidingView>
  );
};

export default FormScreen;
