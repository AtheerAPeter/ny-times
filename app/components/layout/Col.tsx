import {isNumber} from 'lodash';
import React from 'react';
import {FlexStyle, StyleSheet, View, ViewProps} from 'react-native';

export interface LayoutProps extends ViewProps {
  flex?: FlexStyle['flex'];
  flexGrow?: FlexStyle['flexGrow'];
  flexWrap?: FlexStyle['flexWrap'];
  justifyContent?: FlexStyle['justifyContent'];
  alignItems?: FlexStyle['alignItems'];
  alignSelf?: FlexStyle['alignSelf'];
}

export const Col: React.FC<LayoutProps> = props => {
  return (
    <View
      style={[
        styles.column,
        isNumber(props.flexGrow) && {flexGrow: props.flexGrow},
        isNumber(props.flex) && {flex: props.flex},
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
  column: {
    flexDirection: 'column',
  },
});
