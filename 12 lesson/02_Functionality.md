# Forward each trip to third screen - tripDetailScreen

#### in CountryTripScreen.js

- Add the function body:

```js
onSelectTrip={() => {navigation.navigate("TripDetail",{tripId: item.id, tripName: item.title});}}
```

#### Design TripDetailScreen.js

```js
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
// import:
import { TRIPS } from "../data/dummy-data";

export default function TripDetailScreen({ navigation, route }) {
  // store tripId from CountryTripScreen:
  const { tripId } = route.params;
  // find all data for tripId:
  const selectedTrip = TRIPS.find((trip) => trip.id === tripId);

  return (
    <View style={styles.container}>
      {/* Change to dynamic text */}
      <Text>{selectedTrip.title}</Text>
      <Button
        title=" go back to countries"
        onPress={() => navigation.popToTop()}
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

#### Add header with trip title - in navigation:

```js
<Stack.Screen
  name="TripDetail"
  component={TripDetailScreen}
  options={({ route }) => ({ title: route.params.tripName })}
/>
```
