import React, { useRef, useState } from "react";
import {
  Text,
  Pressable,
  Image,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  View,
  Alert,
} from "react-native";
import { styles } from "./FormScreen.style";
import TextField from "../../components/TextField/TextField.component";
import { FormDataType } from "../../utils/types";
import TextArea from "../../components/TextArea/TextArea.component";

const FormScreen = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    lastName: "",
    email: "",
    message: "",
  });

  const firstNameRef = useRef<TextInput>(null);
  const lastNameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const messageRef = useRef<TextInput>(null);

  const handleSubmit = () => {
    Alert.alert(
      "Your Data",
      `Name: ${formData.name} ${formData.lastName}\nE-mail: ${formData.email}\nMessage: ${formData.message}`
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
      <View style={[styles.row, { gap: 12 }]}>
        <TextField
          label="First Name"
          name="name"
          setFormData={setFormData}
          formData={formData}
          keyboardType="name-phone-pad"
          placeholder="John"
          ref={firstNameRef}
          submitConfig={{
            returnKeyType: "next",
            submitBehavior: "submit",
            onSubmitEditing: () => lastNameRef.current?.focus(),
          }}
        />
        <TextField
          label="Last Name"
          name="lastName"
          setFormData={setFormData}
          formData={formData}
          keyboardType="name-phone-pad"
          placeholder="Doe"
          ref={lastNameRef}
          submitConfig={{
            returnKeyType: "next",
            submitBehavior: "submit",
            onSubmitEditing: () => emailRef.current?.focus(),
          }}
        />
      </View>
      <View style={styles.row}>
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
      </View>
      <View style={styles.row}>
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
    </KeyboardAvoidingView>
  );
};

export default FormScreen;
