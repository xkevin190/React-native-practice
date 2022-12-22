import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {IState} from '../../state/root';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Item from '../../components/Item';
import {View} from 'react-native';
import {ActionCreator} from 'redux';
import {getImages} from '../../state/aplication/action';
import {NavigationProps} from '../../constants/types';
import {ListItems} from '../../state/aplication/type';
import List from './List';

interface HomeProps {
  navigation: NavigationProps;
  getItems: () => void;
  listItems: ListItems;
}

const Home = ({navigation, getItems, listItems}: HomeProps) => {
  useEffect(() => {
    getItems();
  }, []);

  console.log(listItems);
  return (
    <Container>
      <View>
        <Header navigation={navigation} title={'characters'} /> 
        <List ListItems={listItems} navigation={navigation} />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
