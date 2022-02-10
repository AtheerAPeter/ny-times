import {StyleSheet} from 'react-native';
import React from 'react';
import {Doc} from '../../@types';
import {colors} from '../../components/theme';
import SingleItem from './SingleItem';
import MasonryList from '@react-native-seoul/masonry-list';
import {widthPercentageToDP} from 'react-native-responsive-screen';

const Skeleton = () => {
  const renderItem = ({item}: {item: Doc}) => {
    return (
      <SingleItem
        type="skeleton"
        key={item._id}
        item={item}
        onPress={() => null}
      />
    );
  };

  return (
    <MasonryList
      containerStyle={styles.contentContainerStyle}
      data={[...Array(10).keys()]}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
    />
  );
};

export default Skeleton;

const styles = StyleSheet.create({
  item: {
    backgroundColor: colors.black,
    height: 100,
    width: 100,
  },
  contentContainerStyle: {
    flex: 1,
    alignContent: 'center',
    paddingLeft: widthPercentageToDP(3),
  },
  loadingMoreComponent: {
    height: 50,
    width: widthPercentageToDP(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  avtivityLoader: {
    marginRight: 10,
  },
});
