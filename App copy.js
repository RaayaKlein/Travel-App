// 1. imports:
import React, { useState } from "react";
import { Text, View, Button, TextInput } from "react-native";

// 1 function to export - function name similar to file name
export default function App() {

  // variables:
  const [outputText, setOutputText] = useState("bye..");

  // returned components:
  return (
    <View>
      <TextInput
      style={}
      onChangeText={} // when user inserts data
      
      />
    </View>
  );
}