import React, {useState} from 'react';
import {connect} from 'react-redux';
import {IState} from '../../state/root';
import Container from '../../components/Container';
import Header from '../../components/Header';
import {View} from 'react-native';
import {ActionCreator} from 'redux';
import {getImages, setFavorite} from '../../state/aplication/action';
import {NavigationProps} from '../../constants/types';
import {ListItems} from '../../state/aplication/type';
import List from './List';
import Input from '../../components/TextInput';

interface FavoritesProps {
  navigation?: NavigationProps;
  listItems: ListItems;
  _setFavorite: (name: string) => void;
}

const Favorites = ({navigation, listItems, _setFavorite}: FavoritesProps) => {
  const [search, setSearch] = useState('');
  const favorites = listItems.filter(item => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) && item.favorite
    );
  });

  return (
    <Container>
      <View>
        <Header navigation={navigation} title={'Favorites'} />
        <Input onchange={text => setSearch(text)} />
        <List
          setFavorite={_setFavorite}
          ListItems={favorites}
          navigation={navigation!}
        />
      </View>
    </Container>
  );
};
const mapStateToProps = (state: IState) => ({
  listItems: state.aplication.items,
  loadingApp: state.aplication.loading,
});

const mapDispatchToProps = (dispatch: ActionCreator<any>) => ({
  getItems: (type: number) => dispatch(getImages(type)),
  _setFavorite: (name: string) => dispatch(setFavorite(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
