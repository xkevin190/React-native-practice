import * as React from 'react';
import {StyleSheet, SafeAreaView, View, Platform} from 'react-native';
import { colors } from '../constants/colors';

interface ContainerProps {
  children: JSX.Element;
}

const Container = (props: ContainerProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <>{props.children}</>
      </View>
    </SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
