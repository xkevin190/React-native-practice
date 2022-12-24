import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../constants/colors';
import {normalize, SCREEN_WIDTH} from '../constants/utils';

interface DrawerProps {
  navigation: NativeStackNavigationProp<any, any>;
}

const Drawer = ({navigation}: DrawerProps) => {
  const back = () => navigation.closeDrawer();

  const navigate = (name: string) => {
    navigation.navigate(name);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={back}>
        <Icon
          style={styles.iconStyle}
          name={'close'}
          size={normalize(25)}
          color={colors.primary}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => navigate('Home')}>
        <Text style={styles.textItem}>Characters</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => navigate('Favorites')}>
        <Text style={styles.textItem}>Favorites</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  itemContainer: {
    marginTop: 40,
    width: '100%',
    marginHorizontal: 45,
  },
  textItem: {
    fontFamily: 'Urbanist',
    fontSize: normalize(20),
    fontWeight: '600',
    color: colors.primary,
  },
  iconStyle: {
    marginBottom: 10,
    marginHorizontal: 20,
  },
});
