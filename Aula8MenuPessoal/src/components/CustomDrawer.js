import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { Image, View } from 'react-native';
 
export default function CustomDrawer(props){
  return(
    <DrawerContentScrollView {...props} >
      <View>
        <Image
        source={require('../assets/foto.png')}
        style={{width: 65, height: 65}}
        />
    
      </View>
 
      <DrawerItemList {...props} />
 
    </DrawerContentScrollView>
  );
}
