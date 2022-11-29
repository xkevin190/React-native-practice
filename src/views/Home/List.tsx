import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Card from '../../components/Card';


interface ListProps {}

const List = (props: ListProps) => {
  return (
    <View style={styles.container}>
      <Card />
      <Card />
      <Card />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
