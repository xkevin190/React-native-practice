import React from 'react';
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

interface HomeProps {
  navigation?: NavigationProps;
  getItems: () => void;
  listItems: ListItems;
  _setFavorite: (name: string) => void;
}

const Home = ({navigation, getItems, listItems, _setFavorite}: HomeProps) => {
  React.useEffect(() => {
    getItems();
  }, []);

  return (
    <Container>
      <View>
        <Header navigation={navigation} title={'characters'} />
        <List
          setFavorite={_setFavorite}
          ListItems={listItems}
          navigation={navigation!}
        />
      </View>
    </Container>
  );
};
const mapStateToProps = (state: IState) => {
  return {
    listItems: state.aplication.items,
    loadingApp: state.aplication.loading,
  };
};

function mapDispatchToProps(dispatch: ActionCreator<any>) {
  return {
    getItems: (type: number) => dispatch(getImages(type)),
    _setFavorite: (name: string) => dispatch(setFavorite(name)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
