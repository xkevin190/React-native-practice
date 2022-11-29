import React, {memo} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {normalize, SCREEN_HEIGHT, SCREEN_WIDTH} from '../constants/utils';
import Icon from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/Feather';
import moment from 'moment';

interface CardProps {
  author: string;
  ups: number;
  num_comments: number;
  title: string;
  thumbnail: string;
  url: string;
  created: number;
  action: (url: string) => void;
}

const Card = (props: CardProps) => {
  return (
    <TouchableOpacity
      onPress={() => props.action(props.url)}
      style={styles.container}>
      <View style={styles.TopContainer}>
        <Text style={styles.textType}>TECNOLOGY</Text>
        <Text style={styles.textSpam}>* {props.author}</Text>
        <Text style={styles.textSpam}>
          * {moment.unix(props.created).fromNow()}
        </Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text numberOfLines={2} style={styles.textTitle}>
          {props.title}
        </Text>
        <FastImage
          style={styles.image}
          source={{
            uri: props.thumbnail,
          }}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.iconContainer}>
          <Icon name={'heart'} color={'#fd4500'} size={normalize(18)} />
          <Text style={styles.iconText}>{props.ups}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Material size={normalize(18)} color="gray" name="message-circle" />
          <Text style={styles.iconText}>{props.num_comments}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Material name="share" size={normalize(18)} color="gray" />
          <Text style={styles.iconText}>shared</Text>
        </View>
        <Material size={normalize(18)} color="gray" name="gift" />
      </View>
    </TouchableOpacity>
  );
};

export default memo(Card);

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT * 0.4,
    backgroundColor: 'white',
    marginTop: SCREEN_HEIGHT * 0.01,
  },
  TopContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bodyContainer: {
    flex: 4,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: SCREEN_WIDTH * 0.05,
    flex: 1,
  },
  textType: {
    fontSize: normalize(14),
    paddingLeft: SCREEN_WIDTH * 0.05,

    fontWeight: '600',
    color: 'gray',
  },
  textSpam: {
    paddingLeft: SCREEN_WIDTH * 0.02,
    fontSize: normalize(11),
    fontWeight: '300',
  },
  textTitle: {
    paddingLeft: SCREEN_WIDTH * 0.05,
    fontFamily: 'MuseoSans-700',
    fontSize: normalize(14),
    color: '#1f1e1e',
    fontWeight: '700',
  },
  image: {
    marginTop: 10,
    flex: 1,
    width: SCREEN_WIDTH,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    paddingLeft: normalize(5),
    fontSize: normalize(12),
    color: 'gray',
  },
});
