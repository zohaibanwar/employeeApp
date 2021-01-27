import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { Card, FAB } from "react-native-paper";

const HomeScreen = ({ navigation }) => {
  const data = [
    {
      id: 1,
      name: "Zohaib Anwar",
      email: "zohaib@zohaib.com",
      salary: "5 lpa",
      phone: "03126547524",
      position: "App Developer",
      picture: require("../../assets/images/zohaib.jpg"),
    },
    {
      id: 2,
      name: "Usama Tufail",
      email: "usama@usama.com",
      salary: "6 lpa",
      phone: "03012458794",
      position: "Amazon VA",
      picture: require("../../assets/images/usama.jpg"),
    },
    {
      id: 3,
      name: "Rashid Naveed",
      email: "rashid@rashid.com",
      salary: "7 lpa",
      phone: "03258795461",
      position: "Full Stack Developer",
      picture: require("../../assets/images/rashid.jpg"),
    },
    {
      id: 4,
      name: "Ammar Rana",
      email: "ammar@ammar.com",
      salary: "8 lpa",
      phone: "03478941260",
      position: "RoR Developer",
      picture: require("../../assets/images/ammar.jpg"),
    },
    {
      id: 5,
      name: "Zia Ullah",
      email: "zia@zia.com",
      salary: "6 lpa",
      phone: "0311248950024",
      position: "Ambessoder",
      picture: require("../../assets/images/zia.jpg"),
    },
    {
      id: 6,
      name: "Talha Umar",
      email: "talha@talhaumar.com",
      salary: "9 lpa",
      phone: "03496589658",
      position: "Python Developer",
      picture: require("../../assets/images/talhaa.jpg"),
    },
    {
      id: 7,
      name: "Abdullah Rao",
      email: "abdullah@abdullah.com",
      salary: "9 lpa",
      phone: "03045852133",
      position: "Blockchain Developer",
      picture: require("../../assets/images/abdullah.jpg"),
    },
    {
      id: 8,
      name: "Talha Javed",
      email: "talha@talhajaved.com",
      salary: "4 lpa",
      phone: "03121247895",
      position: "Graphics Designer",
      picture: require("../../assets/images/talhaaaa.jpg"),
    },
    {
      id: 9,
      name: "Owais Qarni",
      email: "owais@owais.com",
      salary: "8 lpa",
      phone: "03174512369",
      position: "ML Expert",
      picture: require("../../assets/images/owais.jpg"),
    },
    {
      id: 10,
      name: "Jawad Ch",
      email: "jawad@jawad.com",
      salary: "7 lpa",
      phone: "03001487549",
      position: ".Net Developer",
      picture: require("../../assets/images/jawad.jpg"),
    },
    {
      id: 11,
      name: "Talha Habib",
      email: "talha@talhahabib.com",
      salary: "10 lpa",
      phone: "03139517530",
      position: "Products Seller",
      picture: require("../../assets/images/talhaaa.jpg"),
    },
  ];

  const renderData = (item) => {
    return (
      <Card
        onPress={() => navigation.navigate("Profile", { item })}
        style={styles.card}
        key={item.id}
      >
        <View style={styles.cardView}>
          <Image style={styles.img} source={item.picture} />
          <View style={styles.textView}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text2}>{item.position}</Text>
          </View>
        </View>
      </Card>
    );
  };
  return (
    <View>
      <FlatList
        keyExtractor={(item) => `${item.id}`}
        data={data}
        renderItem={({ item }) => {
          return renderData(item);
        }}
      />
      <FAB
        onPress={() => navigation.navigate("Create")}
        style={styles.fab}
        theme={{ colors: { accent: "#006aff" } }}
        icon="plus"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 5,
    padding: 5,
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  cardView: {
    flexDirection: "row",
    padding: 6,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text2: {
    fontSize: 16,
  },
  textView: {
    marginLeft: 10,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default HomeScreen;
