import { StatusBar } from "expo-status-bar";
import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Pressable,
} from "react-native";

function categories() {
  return (
    <View>
      <Text>Category screen</Text>
    </View>
  );
}
// function homeScreen() {
//   return (

//   );
// }

// const stack = createStackNavigator();

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
          source={{
            uri: "https://cdn.icon-icons.com/icons2/836/PNG/512/Google_icon-icons.com_66793.png",
          }}
          style={{ width: 20, height: 20 }}
        />
        <Text style={styles.gmailtext}>Login with Gmail</Text>
      </Pressable>

      <Pressable style={styles.appleButton}>
        <Image
          source={{
            uri: "https://banner2.cleanpng.com/20180614/vvg/kisspng-dell-logo-apple-computer-software-apple-inc-5b2310e30b9ca3.9969922215290247390476.jpg",
          }}
          style={{ width: 24, height: 24 }}
        />

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
    flexDirection: "row",
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
    paddingLeft: 20,
  },
  gmailtext: {
    color: "black",
    paddingLeft: 20,
  },
});
