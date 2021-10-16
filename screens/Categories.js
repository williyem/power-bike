import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
// import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import bikes from "../data/bikes.js";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
const width = Dimensions.get("window").width / 2 - 30;

const Categories = ({ navigation }) => {
  const categories = ["All", "Roadbike", "Mountain", "urban"];

  const [categoryIndex, setCategoryIndex] = React.useState(0);

  const CategoryList = () => {
    return (
      <View style={styles.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setCategoryIndex(index)}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.categoryText,
                categoryIndex == index && styles.categoryTextSelected,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const Card = ({ item, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Details", item)}
      >
        <View style={styles.card} key={index}>
          <View style={{ alignItems: "flex-end" }}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: item.like
                  ? "rgba(245, 42, 42,0.2)"
                  : "rgba(0,0,0,0.2) ",
              }}
            >
              <Icon
                name="favorite"
                size={18}
                color={item.like ? "red" : "black"}
              />
            </View>
          </View>
          <Image style={styles.image} resizeMode="contain" source={item.img} />
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.text}>${item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: "white",
        marginTop: 30,
      }}
    >
      <Text style={{ fontSize: 20 }}>
        The World's{" "}
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "orange" }}>
          BEST BIKE
        </Text>
      </Text>
      <Text style={{ fontSize: 15, fontWeight: "bold", paddingTop: 20 }}>
        Categories
      </Text>
      <CategoryList />

      <FlatList
        numColumns={2}
        style={styles.container}
        data={bikes}
        renderItem={({ item }) => {
          return <Card item={item} />;
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 20,
    justifyContent: "space-between",
  },
  categoryText: {
    fontSize: 16,
    color: "grey",
    fontWeight: "bold",
  },
  categoryTextSelected: {
    color: "orange",
    borderBottomWidth: 2,
    paddingBottom: 5,
    borderColor: "orange",
  },

  container: {
    flex: 1,
    height: 425,
  },
  card: {
    height: 225,
    backgroundColor: "#f1f1f1",
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    overflow: "auto",
  },
  item: {
    padding: 4,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 8,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    color: "orange",
    fontWeight: "bold",
    justifyContent: "center",
  },
});

export default Categories;
