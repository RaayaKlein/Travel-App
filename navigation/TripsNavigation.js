import React from "react";
import { Platform } from "react-native";
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
      <Stack.Navigator
        initialRouteName="Countries"
        screenOptions={{
          headerStyle: {
            backgroundColor: (Platform.OS == "android"
              ? "mediumseagreen"
              : "white"),
          },
          headerTintColor: (Platform.OS == "android"
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
        <Stack.Screen 
        name="TripDetail" 
        component={TripDetailScreen}
        options={({ route }) => ({ title: route.params.tripName })}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}