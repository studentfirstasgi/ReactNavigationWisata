import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './src/screens/HomePage/HomePage';
import SplashScreen from './src/screens/SpalshScreen/SplashSreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
