import * as React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {colors} from '../constants/colors';
import {SCREEN_HEIGHT} from '../constants/utils';

interface InputProps {
  onchange: (text: string) => void;
}

const Input = (props: InputProps) => {
  return (
    <TextInput
      style={styles.container}
      onChangeText={text => props.onchange(text)}
      placeholder={'writte here'}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginTop: SCREEN_HEIGHT * 0.03,
    height: SCREEN_HEIGHT * 0.055,
    marginHorizontal: 20,
    borderRadius: 14,
    borderColor: colors.primary,
    paddingHorizontal: 20,
    borderWidth: 0.8,
    fontSize: 15,
    color: colors.primary,
  },
});
