import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {item} from '../state/aplication/type';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../constants/colors';
import {normalize} from '../constants/utils';
interface ItemProps {
  gender: string;
  name: string;
  birth_year: string;
  homeworld: string;
  favorite: string;
  action: (name: string) => void;
}

const Item = (props: ItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerFavoriteIcon}>
        <TouchableOpacity onPress={() => props.action(props.name)}>
          <Icon
            size={normalize(15)}
            color={colors.primary}
            name={props.favorite ? 'heart' : 'heart-outline'}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.texTitle}>{props.name}</Text>
      <Text style={styles.textSpam}>
        {`${props.gender}  |  ${props.birth_year}`}
      </Text>
      <View style={styles.locationContainer}>
        <Icon
          color={colors.primary}
          size={normalize(13)}
          name="location-outline"
        />
        <Text style={[styles.texTitle, styles.locationText]}>
          {props.homeworld}
        </Text>
      </View>
    </View>
  );
};

export default React.memo(Item);

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderBottomColor: colors.separator,
  },
  texTitle: {
    fontFamily: 'Urbanist',
    color: colors.primary,
    fontSize: normalize(13),
    fontWeight: '600',
  },

  containerFavoriteIcon: {
    alignItems: 'flex-end',
    bottom: -10,
  },

  textSpam: {
    paddingTop: 10,
    fontFamily: 'Urbanist',
    color: colors.textSpam,
    fontSize: normalize(12),
    fontWeight: '400',
  },
  locationContainer: {
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: colors.secondary,
    width: '30%',
    paddingVertical: 3,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },

  locationText: {
    fontSize: normalize(12),
    paddingLeft: 3,
  },
});
