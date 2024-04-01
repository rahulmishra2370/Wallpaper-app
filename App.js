import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './Components/Navbar';
import Screen1 from './Components/Screen1';
import Screen2 from './Components/Screen2';
import { RecoilRoot } from 'recoil';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator(); // Corrected variable name

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='S1'>
          <Stack.Screen name='S1' component={Screen1}
          options={{
            headerStyle:{
              backgroundColor:'#42f5b0'
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
              fontWeight:'bold'
            },
            title:'HOME',
            headerTitleAlign:'center'
          }}
          />
          <Stack.Screen name='S2' component={Screen2}
          options={{
            headerStyle:{
              backgroundColor:'black'
            },
            headerTintColor:'#fff',
           headerTitleStyle:{
            fontWeight:'bold'
           },
           title:'Back',
           headerTitleAlign:'center'
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:25,
    width:'100%',
    height:'100%',
    alignItems: 'center',
  },
});
