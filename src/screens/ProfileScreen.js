import React from "react";
import { View, Text, StyleSheet, Image, Linking, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Title, Card, Button } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const ProfileScreen = (props) => {
  const {
    id,
    name,
    email,
    salary,
    phone,
    position,
    picture,
  } = props.route.params.item;
  const openDial = () => {
    if (Platform.OS === "android") {
      Linking.openURL("tel:123456");
    } else {
      Linking.openURL("telpromt:123456");
    }
  };
  return (
    <View style={styles.root}>
      <LinearGradient
        colors={["#0339ff", "#859fff"]}
        style={styles.linearGradient}
      />
      <View style={styles.imgView}>
        <Image style={styles.img} source={picture} />
      </View>
      <View style={styles.titleView}>
        <Title>{name}</Title>
        <Text style={{ fontSize: 15 }}>{position}</Text>
      </View>
      <Card
        style={styles.card}
        onPress={() => {
          Linking.openURL("mailto:abc@xyz.com");
        }}
      >
        <View style={styles.cardContent}>
          <MaterialIcons name="email" size={32} color="#006aff" />
          <Text style={styles.mytext}>{email}</Text>
        </View>
      </Card>
      <Card style={styles.card} onPress={() => openDial()}>
        <View style={styles.cardContent}>
          <Entypo name="phone" size={32} color="#006aff" />
          <Text style={styles.mytext}>{phone}</Text>
        </View>
      </Card>
      <Card style={styles.card}>
        <View style={styles.cardContent}>
          <MaterialIcons name="attach-money" size={32} color="#006aff" />
          <Text style={styles.mytext}>{salary}</Text>
        </View>
      </Card>
      <View style={styles.btnView}>
        <Button
          icon="account-edit"
          mode="contained"
          theme={{ colors: { primary: "#006aff" } }}
        >
          Edit
        </Button>
        <Button
          icon="delete"
          mode="contained"
          theme={{ colors: { primary: "#006aff" } }}
        >
          Delete
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  linearGradient: {
    height: "20%",
  },
  img: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginTop: -50,
  },
  imgView: {
    alignItems: "center",
  },
  titleView: {
    alignItems: "center",
    margin: 15,
  },
  card: { margin: 3 },
  cardContent: {
    flexDirection: "row",
    padding: 8,
  },
  mytext: {
    fontSize: 18,
    marginTop: 1,
    marginLeft: 5,
  },
  btnView: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 15,
  },
});

export default ProfileScreen;
