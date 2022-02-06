import React from "react";
import { StyleSheet, FlatList, Text } from "react-native";

import { COUNTRIES } from "../data/dummy-data";

// 1. Import:
import CountryGridTile from "../components/CountryGridTile";

const CountriesScreen = ({ navigation }) => {

  const renderGridItem = ({ item }) => {
    return (
      // change to CountryGridTile:
      <CountryGridTile
        title={item.title}
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