/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React, {memo, useMemo} from 'react';
import {Doc} from '../../@types';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {colors} from '../../components/theme';
import LinearGradient from 'react-native-linear-gradient';
import {Label} from '../../components/Label';
type Props = {
  item: Doc;
  onPress: (item: Doc) => void;
  type: 'skeleton' | 'card';
};

const SingleItem = (props: Props) => {
  const randomBool = useMemo(() => Math.random() < 0.5, []);
  const {item} = props;

  const handleCardPress = () => {
    props.onPress(props.item);
  };

  if (props.type === 'skeleton') {
    return (
      <View
        style={[
          styles.card,

          {
            height: randomBool ? 270 : 350,
            backgroundColor: colors.lightGray,
            justifyContent: 'flex-end',
          },
        ]}>
        <View style={[styles.skeletonTitle, {width: '80%'}]} />
        <View style={[styles.skeletonTitle, {width: '50%'}]} />
        <View
          style={[
            styles.skeletonTitle,
            {width: '90%', height: 8, marginTop: 10},
          ]}
        />
        <View style={[styles.skeletonTitle, {width: '50%', height: 8}]} />
      </View>
    );
  }

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={[styles.card, {height: randomBool ? 270 : 350}]}>
        <LinearGradient
          colors={['#0000002f', '#0000007f', '#000000af']}
          style={styles.linearGradient}
        />
        <Image
          source={{
            uri: `https://www.nytimes.com/${item?.multimedia?.[0]?.url}`,
          }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.label}>
          <Label color={colors.white} numberOfLines={3}>
            {item.headline.main}
          </Label>
          <Label
            style={styles.snippet}
            numberOfLines={4}
            color={colors.disabled}
            size={'Small'}>
            {item.snippet}
          </Label>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(SingleItem);

const styles = StyleSheet.create({
  card: {
    marginTop: 12,
    width: widthPercentageToDP(45),
    backgroundColor: colors.white,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  linearGradient: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: 100,
  },
  label: {
    position: 'absolute',
    zIndex: 1000,
    bottom: 10,
    left: 10,
    width: '90%',
  },
  snippet: {
    marginTop: 5,
  },
  skeletonTitle: {
    backgroundColor: colors.white,
    height: 20,
    marginBottom: 10,
    marginLeft: 10,
  },
});
