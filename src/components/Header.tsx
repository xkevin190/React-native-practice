import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {normalize, SCREEN_WIDTH} from '../constants/utils';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={require('../../assets/image/Menu.png')} />
      </TouchableOpacity>
      <View>
        <Text style={styles.TextHeader}>Reddit</Text>
      </View>
      <View />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SCREEN_WIDTH * 0.067,
  },
  TextHeader: {
    fontSize: normalize(20),
    fontWeight: 'bold',
    fontFamily: 'MuseoSans-500',
  },
});
