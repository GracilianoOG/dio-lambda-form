import React from "react";
import { View, Text, TextInput } from "react-native";

import { styles } from "./FormScreen.style";

const FormScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <Text style={styles.label}>Name: </Text>
        <TextInput style={styles.input} keyboardType="name-phone-pad" />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>E-mail: </Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          placeholder="email@example.com"
        />
      </View>
    </View>
  );
};

export default FormScreen;
