import React from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";

import { COUNTRIES, TRIPS } from "../data/dummy-data";
// 1. import:
import TripItem from "../components/TripItem";

export default function CountryTripScreen({ route, navigation }) {
  const { countryId } = route.params;
  // Array of all trips - connected to that country!
  const displayedTrips = TRIPS.filter(trip => trip.countryIds.indexOf(countryId) >= 0);

  // 2. Call TripItem:
  const renderTripItem = ({ item }) => {
    return (
      <TripItem
        title={item.title}
        duration = {item.duration}
        complexity = {item.complexity}
        affordability = {item.affordability}
        onSelectTrip={() => {
          navigation.navigate("TripDetail",{tripId: item.id, tripName: item.title});
        }}
        image = {item.imageUrl}
      />
    )
  }


  return (
    <View style={styles.container}>
      <FlatList
      data={displayedTrips}
      keyExtractor={item => item.id}
      renderItem={renderTripItem}
      style={{width:'100%'}}
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