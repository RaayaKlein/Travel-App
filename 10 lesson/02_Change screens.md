# Change screens:

1. navigation.navigate(screen name)
2. navigation.goBack()
3. navigation.popToTop()
4. navigation.replace()

### 1. CountriesScreen.js

- Create a button - go from first page to second page.

```js
// 1. import the button
import { StyleSheet, Text, View, Button } from "react-native";

export default function CountriesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Countries screen</Text>
      <Button
        title="Go to Country trips..."
        onPress={() => navigation.navigate("CountryTrip")}
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

### 2. CountryTripScreen.js

- Create a button - go from second page to third page.
- Create another button - that goes back(in stack).

```js
import { StyleSheet, Text, View, Button } from "react-native";

// Add another button - move from screen 2 to screen 3: TripDetailScreen

export default function CountryTripScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Country trip screen</Text>
      <Button
        title="Go to trip details..."
        onPress={() => navigation.navigate("TripDetail")}
      />

      {/* The goBack() function is built-in */}
      <Button title="Go back.." onPress={() => navigation.goBack()} />
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

### 2. CountryTripScreen.js

- Create 2 buttons that do the same thing: Go to the first screen.

```js
import { StyleSheet, Text, View, Button } from "react-native";

export default function TripDetailScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Trip detail screen</Text>

      {/* Both buttons go to the same place: */}
      <Button title="Go the Countries" onPress={() => navigation.popToTop()} />
      <Button
        title="Go the Countries"
        onPress={() => navigation.navigate("Countries")}
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

#### 4. replace()

The function replace() will change the first screen in the stack, to the current screen.

It is very usefull for actions that the user shouldn't go back to.
For example: LOGIN, after Payment.

```js
// 1. import the button
import { StyleSheet, Text, View, Button } from "react-native";

export default function CountriesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Countries screen</Text>
      <Button
        title="Go to Country trips..."
        onPress={() => navigation.navigate("CountryTrip")}
      />

      {/* replace() function - we cannot go back. replace the first screen to the current screen */}
      <Button
        color="green"
        title="Use replace..."
        onPress={() => navigation.replace("CountryTrip")}
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
