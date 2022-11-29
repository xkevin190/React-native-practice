import * as React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {NavigationProps} from '../../constants/types';
import {IAplicationState, item} from '../../state/aplication/type';
import {IState} from '../../state/root';
import Container from '../../components/Container';
import Header from '../../components/Header';
import {ActionCreator} from 'redux';
import {getImages} from '../../state/aplication/action';

import Item from '../../components/Item';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import List from './List';

interface HomeProps {
  navigation: NavigationProps;
  aplication: IAplicationState;
  getItems: () => void;
}

const Home = (props: HomeProps) => {
  const Tab = createMaterialTopTabNavigator();
  React.useEffect(() => {
    props.getItems();
  }, []);

  return (
    <Container>
      <>
        <Header />
        <Tab.Navigator>
          <Tab.Screen name="New" component={List} />
          <Tab.Screen name="Top" component={List} />
          <Tab.Screen name="Popular" component={List} />
          <Tab.Screen name="Hot" component={List} />
        </Tab.Navigator>
      </>
    </Container>
  );
};

const mapStateToProps = (state: IState) => ({
  aplication: state.aplication,
});

const mapDispatchToProps = (dispatch: ActionCreator<any>) => ({
  getItems: () => dispatch(getImages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
