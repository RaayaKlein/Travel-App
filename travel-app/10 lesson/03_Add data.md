# Add data

- Create folder `models`
- in models: Countries.js

```js
export default class Country {
  constructor(id, title, color) {
    this.id = id;
    this.title = title;
    this.color = color;
  }
}
```

- Create folder `data`
- in models: dummy-data.js

## Add FlatList

```js
import React from "react";
// 1. import the button
import { StyleSheet, Text, View, Button, FlatList } from "react-native";

import { COUNTIRES } from "../data/dummy-data";

const renderGridItem = ({ item }) => {
  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  );
};

export default function CountriesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={COUNTIRES}
        renderItem={renderGridItem}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
```
