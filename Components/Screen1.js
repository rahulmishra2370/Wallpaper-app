import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { inputtextwallpaper } from "../atoms/wallpaperinputtext";
import Navbar from "./Navbar";

export default function Screen1({navigation}) {
  const access_key = "c8l1ZQ_-GBmaeFKCS55DJHZCNjMvJvL0PvA6pUVIChc";
  const [searchvalue, setSearchValue] = useRecoilState(inputtextwallpaper);
  const [imagecollection, setImageCollection] = useState([]);

  useEffect(() => {
    const getimagecollection = async () => {
      let data = await fetch(
        `https://api.unsplash.com/search/collections?page=1&per_page=15&query=${searchvalue}&client_id=${access_key}`
      );
      let jsondata = await data.json();
      setImageCollection(jsondata);
    };
    getimagecollection();
  }, [searchvalue]);

  const ShowWallpaper = (item) => {
      navigation.navigate('S2',{clickedimage:`${JSON.stringify(item)}`
    })
  };

  return (
    <View style={styles.container}>
    <Navbar/>
      <FlatList
        numColumns={2}
        data={imagecollection.results}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => ShowWallpaper(item)}>
            <View style={styles.imagecontainer}>
              <Image source={{ uri: item.cover_photo.urls.regular }} style={styles.image} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  imagecontainer: {
    width: 200,
    height: 400,
    backgroundColor: "white",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
