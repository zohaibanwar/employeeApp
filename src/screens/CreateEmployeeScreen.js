import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, Alert } from "react-native";
import { TextInput, Button } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

const CreateEmployeeScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [salary, setSalary] = useState("");
  const [picture, setPicture] = useState("");
  const [modal, setModal] = useState(false);

  const pickImageFromGallery = async () => {
    const { granted } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    if (granted) {
      let data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      if (!data.cancelled) {
        let newFile = {
          uri: data.uri,
          type: `test/${data.uri.split(".")[1]}`,
          name: `test.${data.uri.split(".")}`,
        };
        handleUpload(newFile);
      }
    } else {
      Alert.alert("You need to give us permissions.");
    }
  };

  const pickImageFromCamera = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA);
    if (granted) {
      let data = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      if (!data.cancelled) {
        let newFile = {
          uri: data.uri,
          type: `test/${data.uri.split(".")[1]}`,
          name: `test.${data.uri.split(".")}`,
        };
        handleUpload(newFile);
      }
    } else {
      Alert.alert("You need to give us permissions.");
    }
  };

  const handleUpload = (image) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "employeeApp");
    data.append("cloud_name", "Zohaib");

    fetch("https://api.cloudinary.com/v1_1/zybiii/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setPicture(data.url);
        setModal(false);
      });
  };
  return (
    <View style={StyleSheet.root}>
      <TextInput
        style={styles.textinput}
        theme={{ colors: { primary: "#006aff" } }}
        mode="outlined"
        placeholder="Please enter your name"
        label="Name"
        value={name}
        onChangeText={(text) => {
          setName(text);
        }}
      />
      <TextInput
        style={styles.textinput}
        theme={{ colors: { primary: "#006aff" } }}
        mode="outlined"
        placeholder="Please enter your email"
        keyboardType="email-address"
        label="Email"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
        }}
      />
      <TextInput
        style={styles.textinput}
        theme={{ colors: { primary: "#006aff" } }}
        mode="outlined"
        placeholder="Please enter your phone"
        keyboardType="number-pad"
        label="Phone"
        value={phone}
        onChangeText={(text) => {
          setPhone(text);
        }}
      />
      <TextInput
        style={styles.textinput}
        theme={{ colors: { primary: "#006aff" } }}
        mode="outlined"
        placeholder="Please enter your salary"
        keyboardType="number-pad"
        label="Salary"
        value={salary}
        onChangeText={(text) => {
          setSalary(text);
        }}
      />
      <Button
        style={styles.buttons}
        theme={{ colors: { primary: "#006aff" } }}
        mode="contained"
        icon={picture == "" ? "upload" : "check"}
        onPress={() => setModal(true)}
      >
        Upload Image
      </Button>
      <Button
        style={styles.buttons}
        theme={{ colors: { primary: "#006aff" } }}
        mode="contained"
        icon="content-save"
        onPress={() => console.log("Pressed")}
      >
        Save
      </Button>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => setModal(false)}
      >
        <View style={styles.modalView}>
          <View style={styles.modalButtonView}>
            <Button
              theme={{ colors: { primary: "#006aff" } }}
              mode="contained"
              icon="camera"
              onPress={() => pickImageFromCamera()}
            >
              Camera
            </Button>
            <Button
              theme={{ colors: { primary: "#006aff" } }}
              mode="contained"
              icon="image-area"
              onPress={() => pickImageFromGallery()}
            >
              Gallery
            </Button>
          </View>
          <Button
            theme={{ colors: { primary: "#006aff" } }}
            // mode="contained"
            onPress={() => setModal(false)}
          >
            Cancel
          </Button>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  textinput: {
    margin: 10,
  },
  modalButtonView: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  modalView: {
    position: "absolute",
    bottom: 2,
    width: "100%",
    backgroundColor: "#fff",
  },
  buttons: {
    margin: 5,
  },
});

export default CreateEmployeeScreen;
