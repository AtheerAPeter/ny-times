import {ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';
import {Doc} from '../../@types';
import {colors} from '../../components/theme';
import SingleItem from './SingleItem';
import MasonryList from '@react-native-seoul/masonry-list';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {Row} from '../../components/layout/Row';
import {Label} from '../../components/Label';
type Props = {
  data: Doc[];
  navigation;
  fetchNextPage: () => void;
  isFetchingNextPage: boolean;
};

const MainContent = (props: Props) => {
  const handleCardPress = item => {
    props.navigation.navigate('Details', {item});
  };
  const renderItem = ({item}: {item: Doc}) => {
    return (
      <SingleItem
        type="card"
        key={item._id}
        item={item}
        onPress={handleCardPress}
      />
    );
  };

  const ListFooterComponent = () => {
    return (
      <Row style={styles.loadingMoreComponent}>
        <ActivityIndicator style={styles.avtivityLoader} />
        <Label>Loading more ...</Label>
      </Row>
    );
  };
  return (
    <MasonryList
      containerStyle={styles.contentContainerStyle}
      data={props?.data || []}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      onEndReached={props.fetchNextPage}
      ListFooterComponent={
        props.isFetchingNextPage ? <ListFooterComponent /> : null
      }
    />
  );
};

export default MainContent;

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
