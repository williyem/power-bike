import React from "react";
import { View, SafeAreaView, Image, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import bikes from "../data/bikes.js";

const DetailsScreen = ({ navigation, route }) => {
  const bike = route.params;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View style={style.header}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
        <Icon name="shopping-cart" size={28} />
      </View>

      <Image source={bike.img} style={{ resizeMode: "contain", flex: 1 }} />

      <View style={style.detailsContainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <View style={style.line} />
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Best choice</Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>{bike.name}</Text>
          <View style={style.priceTag}>
            <Text
              style={{
                marginLeft: 15,
                color: "white",
                fontWeight: "bold",
                fontSize: 12,
              }}
            >
              ${bike.price}
            </Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>About</Text>
          <Text
            style={{
              color: "grey",
              fontSize: 16,
              lineHeight: 22,
              marginTop: 10,
            }}
          >
            {bike.about}
          </Text>
          <View
            style={{
              //   marginTop: 60,
              flexDirection: "row",
              justifyContent: "space-between",
              //   alignItems: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View style={style.borderBtn}>
                <Text style={style.borderBtnText}>-</Text>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: 10,
                  fontWeight: "bold",
                }}
              >
                1
              </Text>
              <View style={style.borderBtn}>
                <Text style={style.borderBtnText}>+</Text>
              </View>
            </View>

            <View style={style.buyBtn}>
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                Buy
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: "#fff5ee",
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: "grey",
    marginBottom: 5,
    marginRight: 3,
  },
  borderBtn: {
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 40,
  },
  borderBtnText: { fontWeight: "bold", fontSize: 28 },
  buyBtn: {
    width: 130,
    height: 50,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 5,
  },
  priceTag: {
    backgroundColor: "orange",
    width: 80,
    height: 40,
    justifyContent: "center",
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
});

export default DetailsScreen;
