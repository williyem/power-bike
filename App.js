import { StatusBar } from "expo-status-bar";
import React from "react";
// import { NavigationContainer } from "@react-navigation/native";

import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Pressable,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Hello again</Text> */}
      <Image
        style={styles.bicyleImage}
        source={require("./assets/images/bicycle-logo.jpg")}
      />
      <Text style={styles.baseText}>Welcome to</Text>
      <Text style={styles.secondaryText}>Power Bike Shop</Text>

      <Pressable style={styles.gmailButton}>
        <Image
          source={require("./assets/images/google.svg")}
          style={{ width: 20, height: 20 }}
        />
        <Text style={styles.gmailtext}>Login with Gmail</Text>
      </Pressable>

      <Pressable style={styles.appleButton}>
        <Text style={styles.text}>Login with apple</Text>
      </Pressable>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 25,
    // width: "100%",
  },
  bicyleImage: {
    width: 180,
    height: 180,
    transform: [{ rotate: "-35deg" }],
    borderRadius: 8,
  },
  baseText: {
    marginTop: 80,
    fontSize: 23,
  },
  secondaryText: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 30,
  },

  gmailButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EDEDED",
    padding: 15,
    width: "100%",
    borderRadius: 8,
  },
  appleButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    backgroundColor: "black",
    width: "100%",
    borderRadius: 8,
    margin: 10,
  },
  text: {
    color: "white",
  },
  gmailtext: {
    color: "black",
  },
});
