import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {NavigationProps} from '../constants/types';
import {normalize, SCREEN_HEIGHT, SCREEN_WIDTH} from '../constants/utils';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../constants/colors';

type headerProps = {
  navigation?: NavigationProps;
  title: string;
};


const Header = (props: headerProps) => {
  const goToback = () => {
    props.navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.background} />
      <TouchableOpacity onPress={goToback}>
        <Icon color={colors.primary} name="menu" size={normalize(23)} />
      </TouchableOpacity>
      <View>
        <Text style={styles.TextHeader}>{props.title}</Text>
      </View>
      <View style={{paddingRight: SCREEN_WIDTH * 0.04}} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SCREEN_WIDTH * 0.04,
    height: SCREEN_HEIGHT * 0.06,
  },
  TextHeader: {
    fontFamily: 'Urbanist',
    fontSize: normalize(20),
    fontWeight: '600',
    color: colors.primary,
  },
});
