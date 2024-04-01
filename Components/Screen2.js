import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";

export default function Screen2({ route }) {
  const { clickedimage } = route.params;
  const [imagedata, setImageData] = useState();
  useEffect(() => {
    setImageData(JSON.parse(clickedimage));
  }, []);
  console.log(imagedata);
  return (
    <View style={styles.imagecontainer}>
      {typeof imagedata == "object" && (
        <Image
          source={{ uri: imagedata.cover_photo.urls.regular }}
          style={styles.image}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  imagecontainer: {
    width: '100%',
    height: '100%',
    backgroundColor: "white",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
