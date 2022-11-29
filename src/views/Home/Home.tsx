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

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import List from './List';

const Home = () => {
  const Tab = createMaterialTopTabNavigator();

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

export default connect(mapStateToProps, null)(Home);
