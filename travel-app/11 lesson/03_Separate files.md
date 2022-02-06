## Separate files

#### 1. CountryGridTile.js

- Create another folder - components
- Create that file inside `components`.
- This file will make every country a touchable, with style.

```js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// in Text -> change to props.title
const CountryGridTile = (props) => {
  return (
    <TouchableOpacity
      style={styles.gridItem}
      // redirct to the function with the data
      onPress={props.onSelect}
    >
      <View>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CountryGridTile;
```

#### 2. CountriesScreen.js

- In the FlatList - we render each item -> using the function `renderGridItem`. This function will call the other component we created (CountryGridTile), and will send params.

#### We can add params when we change screens:

```js
navigation.navigate("CountryTrip", {countryId: itemData.item.id}
```

```js
import React from "react";
import { StyleSheet, FlatList } from "react-native";

import { COUNTRIES } from "../data/dummy-data";

// 1. Import:
import CountryGridTile from "../components/CountryGridTile";

const CountriesScreen = ({ navigation }) => {
  const renderGridItem = ({ item }) => {
    return (
      // change to CountryGridTile:
      <CountryGridTile
        title={item.title}
        // Change to onSelect - it is a prop we create to pass the function to the component
        onSelect={() => {
          navigation.navigate("CountryTrip", {
            countryId: item.id,
          });
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={COUNTRIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CountriesScreen.navigationOptions = {
  headerTitle: "Trip countries",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CountriesScreen;
```
