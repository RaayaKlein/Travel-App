## Start the app - navigation

- In web - we navigate with URL's.
- In Apps - we navigate to components.

### Install:

- npm install @react-navigation/native
- expo install react-native-screens react-native-safe-area-context
- npm install @react-navigation/native-stack

### Create screens

- create `screens` folder
- In the folder, create 3 js files:
  - CountriesScreen
  - CountryTripScreen
  - TripDetailScreen

#### Basic example of navigation:

```js
import * as React from "react";
import { View, Text } from "react-native";
// NavigationContainer - gives the root navigator.
import { NavigationContainer } from "@react-navigation/native";
// createNativeStackNavigator - create stack navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Create basic component
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

// create new stack - contains all the pages.
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

### Create navigation in our app

- create folder `navigation`
- in that folder - `TripNavigation.js`

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

const Stack = createNativeStackNavigator();

export default function TripsNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Countries">
        <Stack.Screen name="Countries" component={CountriesScreen} />
        <Stack.Screen name="CountryTrip" component={CountryTripScreen} />
        <Stack.Screen name="TripDetail" component={TripDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

### In App.js

```js
import React from "react";
import TripsNavigator from "./navigation/TripsNavigation";

export default function App() {
  return <TripsNavigator />;
}
```
