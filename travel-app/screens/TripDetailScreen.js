import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { TRIPS } from "../data/dummy-data";

export default function TripDetailScreen({ route }) {

  const { tripId } = route.params;
  const currTrip = TRIPS.find(trip => trip.id === tripId);

  return (
    <View style={styles.container}>
      <ScrollView>
      
        <Image source={{ uri: currTrip.imageUrl }} style={styles.image} />
        <View style={{ ...styles.tripRow, ...styles.tripDetail }}>
          <Text>{currTrip.duration} חגדיגכיגלגחך</Text>
          <Text>{currTrip.complexity.toUpperCase()}</Text>
          <Text>{currTrip.affordability.toUpperCase()}</Text>
        </View>
        <Text style={styles.title}>Description</Text>
        <View style={styles.listItem}>
          <Text>{currTrip.description}</Text>
        </View>
        <Text style={styles.title}>Steps</Text>
        {currTrip.steps.map((step, index) => (
          <View key={index} style={styles.listItem}>
            <Text>{step}</Text>
          </View>
        ))}
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    //fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

