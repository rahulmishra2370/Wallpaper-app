import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRecoilState } from 'recoil'
import { inputtextwallpaper } from '../atoms/wallpaperinputtext';

export default function Screen1() {
    const [searchvalue, setSearchValue]=useRecoilState(inputtextwallpaper)
    console.log(searchvalue)
  return (
    <View style={styles.container}>
      <Text>Screen1</Text>
    </View>
  )
}

const styles = StyleSheet.create({
     container:{
        width:'100%',
        height:'100%'
     }
})