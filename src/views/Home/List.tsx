import * as React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import Card from '../../components/Card';
import {item as Item, ListItems} from '../../state/aplication/type';
import {IState} from '../../state/root';

interface ListProps {
  ListItems?: ListItems;
}

type renderItemProps = {
  item: Item;
  index: number;
};

const renderItem = ({item}: renderItemProps): JSX.Element => {
  return (
    <Card
      author={item.data.author}
      ups={item.data.ups}
      num_comments={item.data.ups}
      title={item.data.title}
      thumbnail={item.data.thumbnail}
    />
  );
};

const List = (props: ListProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.ListItems}
        keyExtractor={_item => _item.data.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const mapStateToProps = (state: IState) => ({
  ListItems: state.aplication.items,
});

export default connect(mapStateToProps, null)(List);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
