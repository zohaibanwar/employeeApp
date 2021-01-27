import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import HomeScreen from "./src/screens/HomeScreen";
import CreateEmployeeScreen from "./src/screens/CreateEmployeeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const myOptions = {
  headerTintColor: "white",
  headerStyle: { backgroundColor: "#006aff" },
};

function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={myOptions} />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={myOptions}
        />
        <Stack.Screen
          name="Create"
          component={CreateEmployeeScreen}
          options={myOptions}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </View>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6e6",

    // alignItems: "center",
    // justifyContent: "center",
  },
});
