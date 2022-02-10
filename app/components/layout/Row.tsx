import React from 'react';
import {StyleSheet, View} from 'react-native';
import {isNumber} from 'lodash';
import {LayoutProps} from './Col';

export const Row: React.FC<LayoutProps> = props => {
  return (
    <View
      style={[
        styles.row,
        isNumber(props.flexGrow) && {flexGrow: props.flexGrow},
        props.flexWrap && {flexWrap: props.flexWrap},
        props.justifyContent && {justifyContent: props.justifyContent},
        props.alignItems && {alignItems: props.alignItems},
        props.alignSelf && {alignSelf: props.alignSelf},
        props.style,
      ]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});
