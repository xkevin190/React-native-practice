import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import {NavigationProps} from '../../constants/types';
import Webview from 'react-native-webview';
import {RouteProp} from '@react-navigation/native';

interface PostSelectedProps {
  navigation: NavigationProps;
  route: RouteProp<any, any>;
}

const PostSelected = (props: PostSelectedProps) => {
  return (
    <View style={styles.container}>
      <Header back={true} navigation={props.navigation} />
      <Webview
        source={{uri: `https://www.reddit.com${props.route.params.url!}`}}
      />
    </View>
  );
};

export default PostSelected;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
