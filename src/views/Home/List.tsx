/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {View, StyleSheet, FlatList, RefreshControl} from 'react-native';
import {connect} from 'react-redux';
import {ActionCreator} from 'redux';
import Card from '../../components/Card';
import {getImages} from '../../state/aplication/action';
import {item as Item, ListItems} from '../../state/aplication/type';
import {IState} from '../../state/root';

interface ListProps {
  ListItems?: ListItems;
  route?: any;
  loadingApp?: boolean;
  getItems: (type: string) => void;
}

type renderItemProps = {
  item: Item;
  index: number;
};

const keyExtractor = (_item: Item) => _item.data.id;

const List = (props: ListProps) => {
  const getPost = () => {
    const type: string =
      props.route.name !== 'Popular' ? props.route.name : 'rising';
    props.getItems(type);
  };

  useFocusEffect(
    React.useCallback(() => {
      getPost();
    }, [props.route]),
  );

  const navigate = (url: string) => {
    console.log('executed', url);
  };

  const memoizedCallback = useCallback(navigate, []);

  const renderItem = ({item}: renderItemProps): JSX.Element => {
    return (
      <Card
        author={item.data.author}
        ups={item.data.ups}
        num_comments={item.data.num_comments}
        title={item.data.title}
        thumbnail={item.data.thumbnail}
        action={memoizedCallback}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={props.ListItems}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        removeClippedSubviews={true}
        initialNumToRender={4}
        extraData={navigate}
        refreshControl={
          <RefreshControl
            refreshing={props.loadingApp!}
            onRefresh={() => {
              getPost();
            }}
          />
        }
      />
    </View>
  );
};

const mapStateToProps = (state: IState) => ({
  ListItems: state.aplication.items,
  loadingApp: state.aplication.loading,
});

const mapDispatchToProps = (dispatch: ActionCreator<any>) => ({
  getItems: (type: string) => dispatch(getImages(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
