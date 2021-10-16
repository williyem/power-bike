// import { StatusBar } from "expo-status-bar";
import React from "react";
import Categories from "./screens/Categories";
import { StatusBar } from "react-native";
import DetailsScreen from "./screens/DetailsScreen";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Pressable,
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Hello again</Text> */}
      <Image
        style={styles.bicyleImage}
        source={require("./assets/images/bicycle-logo.jpg")}
      />
      <Text style={styles.baseText}>Welcome to</Text>
      <Text style={styles.secondaryText}>Power Bike Shop</Text>

      <Pressable
        style={styles.gmailButton}
        onPress={() => navigation.navigate("Categories")}
      >
        <Image
          source={{
            uri: "https://cdn.icon-icons.com/icons2/836/PNG/512/Google_icon-icons.com_66793.png",
          }}
          style={{ width: 20, height: 20 }}
        />
        <Text style={styles.gmailtext}>Login with Gmail</Text>
      </Pressable>

      <Pressable
        style={styles.appleButton}
        onPress={() => navigation.navigate("Categories")}
      >
        <Image
          source={{
            uri: "https://banner2.cleanpng.com/20180614/vvg/kisspng-dell-logo-apple-computer-software-apple-inc-5b2310e30b9ca3.9969922215290247390476.jpg",
          }}
          style={{ width: 24, height: 24 }}
        />

        <Text style={styles.text}>Login with apple</Text>
      </Pressable>
      <Text style={styles.member}>
        Not a member? <Text style={styles.signup}> Sign up</Text>
      </Text>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ header: () => null }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
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
  member: {
    color: "black",
  },
  signup: {
    color: "orange",
    fontWeight: "bold",
  },
});
