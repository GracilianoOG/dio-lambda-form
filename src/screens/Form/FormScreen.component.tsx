import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Alert } from "react-native";

import { styles } from "./FormScreen.style";

const FormScreen = () => {
  const [formData, setFormData] = useState({
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
      <View style={styles.field}>
        <Text style={styles.label}>Name: </Text>
        <TextInput
          style={styles.input}
          keyboardType="name-phone-pad"
          placeholder="John Doe"
          onChangeText={name => setFormData({ ...formData, name })}
          value={formData.name}
        />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>E-mail: </Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          placeholder="email@example.com"
          onChangeText={email => setFormData({ ...formData, email })}
          value={formData.email}
        />
      </View>
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
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </View>
  );
};

export default FormScreen;
