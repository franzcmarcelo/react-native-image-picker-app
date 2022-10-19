import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import * as Sharing from 'expo-sharing';

const App = () => {

  const [image, setImage] = useState(null);
  const [gif, setGif] = useState(null);

  const getRamdomImage = async () => {
    const getRandomInt = max => Math.floor(Math.random() * max);
    setImage(`https://picsum.photos/200?random=${getRandomInt(100)}`);
  }

  const getRamdomGif = async () => {
    const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=8sL1GObqbeNMOFgHLjAAT5YNniSwvYHb');
    console.log(response);
    const responseJson = await response.json();
    const { data } = responseJson;
    const { images } = data;
    const { original } = images;
    const { url } = original;
    setGif(url);
  }

  const shareGif = async () => {
    if(!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }
    await Sharing.shareAsync(gif);
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>My first app</Text>


      {/* RAMDOM IMAGE */}
      <Button color="#000" title="Get ramdom image" onPress={getRamdomImage} />
      {
        image && <Image source={{ uri: image }} style={styles.image} />
      }

      {/* RAMDOM GIF */}
      <TouchableOpacity style={styles.touchable} onPress={getRamdomGif}>
        <Text style={styles.touchableText}>Get Ramdom Gif</Text>
      </TouchableOpacity>
      {
        gif && (
          <>
            <Image source={{ uri: gif }} style={styles.image} />
            <TouchableOpacity style={styles.touchable} onPress={shareGif}>
              <Text style={styles.touchableText}>Sharing gif</Text>
            </TouchableOpacity>
          </>
        )
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