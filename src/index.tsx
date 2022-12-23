import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './views/Home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerMenu from './components/Drawer';
import {SCREEN_WIDTH} from './constants/utils';
import Favorites from './views/Home/Favorites';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator
    screenOptions={{
      headerShown: false,
      drawerStyle: {width: SCREEN_WIDTH},
    }}
    initialRouteName="Home"
    drawerContent={(props: any) => {
      return <DrawerMenu {...props} />;
    }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Favorites" component={Favorites} />
  </Drawer.Navigator>
);

const Navigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="root" component={DrawerNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
