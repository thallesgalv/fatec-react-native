import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import CustomDrawer from './src/components/CustomDrawer';
import { Experiencia } from './src/screens/Experiencia';
import { Formacao } from './src/screens/Formacao';
import { Pessoal } from './src/screens/Pessoal';

const Drawer = createDrawerNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={CustomDrawer}
      >
        <Drawer.Screen name="Pessoal" component={Pessoal} />
        <Drawer.Screen name="Formação" component={Formacao} />
        <Drawer.Screen name="Experiência" component={Experiencia} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
