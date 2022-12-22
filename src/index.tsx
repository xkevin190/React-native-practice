import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './views/Home';
import PostSelected from './views/Home/PostSelected';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import DrawerMenu from './components/Drawer';
import {SCREEN_WIDTH} from './constants/utils';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator
    screenOptions={{
      headerShown: false,
      drawerStyle: {width: SCREEN_WIDTH},
    }}
    initialRouteName="Home"
    drawerContent={(
      props: DrawerContentComponentProps<DrawerContentOptions>,
    ) => {
      return <DrawerMenu {...props} />;
    }}>
    <Stack.Screen name="Home" component={Home} />
    {/* <Stack.Screen name="post" component={PostSelected} /> */}
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
