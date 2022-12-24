import React, {useCallback, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Item from '../../components/Item';
import {NavigationProps} from '../../constants/types';

import {item as IItem, ListItems} from '../../state/aplication/type';

interface ListProps {
  ListItems?: ListItems;
  route?: any;
  loadingApp?: boolean;
  setFavorite: (name: string) => void;
}

type renderItemProps = {
  item: IItem;
  index: number;
};

const keyExtractor = (_item: IItem) => _item.name;

const List = (props: ListProps) => {
  const action = (url: string) => {
    props.setFavorite(url);
  };

  const memoizedCallback = useCallback(action, []);

  const renderItem = ({item}: renderItemProps): JSX.Element => {
    return (
      <Item
        gender={item.gender}
        name={item.name}
        homeworld={item.homeworld}
        birth_year={item.birth_year}
        favorite={item.favorite}
        action={memoizedCallback}
      />
    );
  };

  return (
    <FlatList
      data={props.ListItems}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      removeClippedSubviews={true}
      initialNumToRender={4}
    />
  );
};

export default List;
