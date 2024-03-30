import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './Components/Navbar';
import Screen1 from './Components/Screen1';
import { RecoilRoot } from 'recoil';

export default function App() {
  return (
    <View style={styles.container}>
      <RecoilRoot>
      <Navbar/>
      <Screen1/>
      </RecoilRoot>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:25,
    width:'100%',
    height:'100%',
    backgroundColor: 'blue',
    alignItems: 'center',
    
  },
});
