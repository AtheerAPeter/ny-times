import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {useNyTimes} from '../../hooks/useNyTimes';
import SearchInput from '../../components/SearchInput';
import MainContent from './MainContent';
import {colors} from '../../components/theme';
import {INavigation} from '../../@types/INavigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Doc} from '../../@types';
import Skeleton from './Skeleton';

const Home = (props: NativeStackScreenProps<INavigation, 'Home'>) => {
  const {onSearch, isSearching, data, fetchNext, isFetchingNextPage} =
    useNyTimes();

  const submitSearch = (query: string) => {
    onSearch(query);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchInput onSubmit={submitSearch} />
      {isSearching ? (
        <Skeleton />
      ) : (
        <MainContent
          fetchNextPage={fetchNext}
          navigation={props.navigation}
          data={data as Doc[]}
          isFetchingNextPage={isFetchingNextPage}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  loader: {
    paddingVertical: 10,
  },
});

export default Home;
