import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React from 'react';
import logo from '../assets/search-icon-png-5.png';
import { useRecoilState } from 'recoil';
import { inputtextwallpaper } from '../atoms/wallpaperinputtext';

export default function Navbar() {
   const [searchvalue,setSearchValue]=useRecoilState(inputtextwallpaper)

  const onChangeTextinput = (text) => {
      setSearchValue(text)
      
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchcontainer}>
        <Image style={styles.icon} source={logo} />
        <TextInput onChangeText={onChangeTextinput} style={styles.searchinput} placeholder="Search Wallpaper" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  searchcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 10,
    padding: 10,
    borderRadius: 20,
    width: '80%',
  },
  icon: {
    height: 20,
    width: 20,
  },
  searchinput: {
    width: '80%',
    fontSize: 15,
    paddingLeft: 10,
  },
});
