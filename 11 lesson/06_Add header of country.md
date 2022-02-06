# Add country name to header:

### TripsNavigator.js

```js
import React from "react";
// NavigationContainer - gives the root navigator.
import { NavigationContainer } from "@react-navigation/native";
// createNativeStackNavigator - create stack navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import screens:
import CountriesScreen from "../screens/CountriesScreen";
import CountryTripScreen from "../screens/CountryTripScreen";
import TripDetailScreen from "../screens/TripDetailScreen";
import { Platform } from "react-native";

const Stack = createNativeStackNavigator();

export default function TripsNavigator(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Countries"
        screenOptions={{
          headerStyle: {
            backgroundColor: (Platform.OS = "android"
              ? "mediumseagreen"
              : "white"),
          },
          headerTintColor: (Platform.OS = "android"
            ? "white"
            : "mediumseagreen"),
        }}
      >
        <Stack.Screen name="Countries" component={CountriesScreen} />
        <Stack.Screen
          name="CountryTrip"
          component={CountryTripScreen}
          options={({ route }) => ({ title: route.params.countryName })}
        />
        <Stack.Screen name="TripDetail" component={TripDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

### CountriesScreen.js

```js
import React from "react";
import { StyleSheet, FlatList } from "react-native";

import { COUNTRIES } from "../data/dummy-data";
import CountryGridTile from "../components/CountryGridTile";

const CountriesScreen = ({ navigation }) => {
  const renderGridItem = ({ item }) => {
    return (
      <CountryGridTile
        title={item.title}
        // send the color of each country:
        color={item.color}
        onSelect={() => {
          navigation.navigate("CountryTrip", {
            countryId: item.id,
            countryName: item.title,
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
