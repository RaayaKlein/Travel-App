### Show all the trip for each country:

- Create TripItem in components folder.
- This component will define how each trip will be presented.
- we will show trip title, image, and another 3 datas. (duration, complexity, affordability)
- We show the image as `ImageBackground` (from react-native)
- We get all the info gor each trip - from props!!!!

```js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  // Add:
  ImageBackground,
} from "react-native";

// 1. Add ImageBackground
// 2. add style.

const TripItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onSelectTrip}>
      <View style={styles.tripItem}>
        <View style={{ ...styles.tripRow, ...styles.tripHeader }}>
          <ImageBackground source={{ uri: props.image }} style={styles.bgImage}>
            <View style={styles.titleContainer}>
              <Text style={styles.title} numberOfLines={1}>
                {props.title}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ ...styles.tripRow, ...styles.tripDetail }}>
          <Text>{props.duration}</Text>
          <Text>{props.complexity.toUpperCase()}</Text>
          <Text>{props.affordability.toUpperCase()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tripItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#ccc",
    borderRadius: 10,
    overflow: "hidden",
  },
  tripRow: {
    flexDirection: "row",
  },
  tripHeader: {
    height: "85%",
  },
  tripDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  // ADD: must set wdth and height -> it is from the web.
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  titleContainer: {
    height: 130,
  },
});

export default TripItem;
```

### Call TripItem in `CountryTripScreen.js`

- This is the second screen!
- Here we create a FlatList with all trips for each conutry.
- For each item in the FlatList we call - renderTripItem.
- renderTripItem() - calls the component `TripItem` and sends all the props.

```js
import React from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";

import { COUNTRIES, TRIPS } from "../data/dummy-data";
// 1. import:
import TripItem from "../components/TripItem";

export default function CountryTripScreen({ route, navigation }) {
  const { countryId } = route.params;
  // Array of all trips - connected to that country!
  const displayedTrips = TRIPS.filter(
    (trip) => trip.countryIds.indexOf(countryId) >= 0
  );

  // 2. Call TripItem:
  const renderTripItem = ({ item }) => {
    return (
      <TripItem
        title={item.title}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
        onSelectTrip={() => {}}
        image={item.imageUrl}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedTrips}
        keyExtractor={(item) => item.id}
        renderItem={renderTripItem}
        style={{ width: "100%" }}
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
