// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WisataMapList from './pages/WisataMapList';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Favorit Destinasi" component={WisataMapList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
