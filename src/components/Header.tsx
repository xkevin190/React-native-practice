import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {NavigationProps} from '../constants/types';
import {normalize, SCREEN_WIDTH} from '../constants/utils';
import Icon from 'react-native-vector-icons/Ionicons';

type headerProps = {
  back?: boolean;
  navigation?: NavigationProps;
};

const Header = (props: headerProps) => {
  const goToback = () => {
    if (props.back) {
      props.navigation?.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToback}>
        {!props.back && (
          <Image source={require('../../assets/image/Menu.png')} />
        )}

        {props.back && <Icon name="arrow-back" size={normalize(20)} />}
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
