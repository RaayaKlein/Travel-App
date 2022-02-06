### Stylise:

#### Stack.Navigator:

1. name - global name of the component, this is the name we will write to change screen.
2. component - the component itself.
3. options -
   - title - string - header text.
   - headerStyle - object - JS like CSS, bgColor, border etc...
   - headerTintColor - string color - header color.
   - headerTitleStyle - object - JS like CSS.

- in TripsNavigator.js

```js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CountriesScreen from "../screens/CountriesScreen";
import CountryTripScreen from "../screens/CountryTripScreen";
import TripDetailScreen from "../screens/TripDetailScreen";

const Stack = createNativeStackNavigator();

export default function TripsNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Countries"
          component={CountriesScreen}
          // Add the options to edit the navigation:
          options={{
            title: "Countries page",
            headerStyle: {
              backgroundColor: "cadetblue",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen name="CountryTrip" component={CountryTripScreen} />
        <Stack.Screen name="TripDetail" component={TripDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

### Sharing common options across screens

```js

<Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
```

- in TripsNavigator

```js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CountriesScreen from "../screens/CountriesScreen";
import CountryTripScreen from "../screens/CountryTripScreen";
import TripDetailScreen from "../screens/TripDetailScreen";

const Stack = createNativeStackNavigator();

export default function TripsNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "cadetblue",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Countries"
          component={CountriesScreen}
          // Add the options to edit the navigation:
          options={{ title: "Countries page" }}
        />
        <Stack.Screen name="CountryTrip" component={CountryTripScreen} />
        <Stack.Screen name="TripDetail" component={TripDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```
