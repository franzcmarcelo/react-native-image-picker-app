import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
} from "react-native";

const App = () => {

  const [image, setImage] = useState(null);

  const getRamdomImage = async () => {
    const getRandomInt = max => Math.floor(Math.random() * max);
    setImage(`https://picsum.photos/200?random=${getRandomInt(100)}`);
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>My first app</Text>


      {/* RAMDOM IMAGE */}
      <Button color="#000" title="Get ramdom image" onPress={getRamdomImage} />
      {
        image && <Image source={{ uri: image }} style={styles.image} />
      }

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#27379b",
    paddingTop: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 30,
    color: "white"
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20
  },
  touchable: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  touchableText: {
    color: "#000",
    fontSize: 16,
  }
});

export default App;