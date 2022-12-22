/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {View, StyleSheet, FlatList, RefreshControl} from 'react-native';
import {connect} from 'react-redux';
import {ActionCreator} from 'redux';
import Card from '../../components/Card';
import Item from '../../components/Item';
import {NavigationProps} from '../../constants/types';
import {getImages} from '../../state/aplication/action';
import {item as IItem, ListItems} from '../../state/aplication/type';

interface ListProps {
  ListItems?: ListItems;
  route?: any;
  loadingApp?: boolean;
  getItems: (type: string) => void;
  navigation: NavigationProps;
}

type renderItemProps = {
  item: IItem;
  index: number;
};

const keyExtractor = (_item: IItem) => _item.name;

const List = (props: ListProps) => {
  const navigate = (url: string) => {
    props.navigation.navigate('post', {url: url});
  };

  const memoizedCallback = useCallback(navigate, []);

  const renderItem = ({item}: renderItemProps): JSX.Element => {
    return (
      <Item
        gender={item.gender}
        name={item.name}
        homeworld={item.homeworld}
        birth_year={item.birth_year}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
