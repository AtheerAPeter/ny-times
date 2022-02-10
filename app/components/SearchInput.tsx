import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {colors, fontType} from '../components/theme';
import Icon from 'react-native-dynamic-vector-icons';
import {Row} from './layout/Row';
import {useState} from 'react';
type Props = {
  onSubmit: (query: string) => void;
};

const SearchInput = (props: Props) => {
  const [query, setQuery] = useState<string>('');

  const submitSearch = () => {
    props.onSubmit(query);
  };

  const clearSearch = () => {
    setQuery('');
    props.onSubmit('News');
  };

  return (
    <Row
      alignItems="center"
      style={styles.container}
      justifyContent="space-between">
      <TextInput
        placeholderTextColor={colors.darkGray}
        placeholder="Football, Sports, Politics"
        style={styles.input}
        value={query}
        onChangeText={setQuery}
      />
      <Row alignItems="center" style={styles.controls}>
        {!!query.length && (
          <TouchableOpacity onPress={clearSearch} style={styles.clearBtn}>
            <Icon color={colors.disabled} name="closecircle" type="AntDesign" />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          disabled={query.trim().length < 1}
          onPress={submitSearch}
          style={[
            styles.searchBtn,
            {
              backgroundColor:
                query.trim().length < 1 ? colors.disabled : colors.black,
            },
          ]}>
          <Icon color={colors.white} name="search" type="FontAwesome5" />
        </TouchableOpacity>
      </Row>
    </Row>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: widthPercentageToDP(93),
    maxWidth: widthPercentageToDP(93),
    fontFamily: fontType.base,
    backgroundColor: colors.lightGray,
    alignSelf: 'center',
    marginVertical: 10,
  },
  input: {
    height: '100%',
    borderRadius: 10,
    margin: 5,
    color: colors.black,
  },
  searchBtn: {
    height: '100%',
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearBtn: {marginRight: 10},
  controls: {
    height: '100%',
  },
});
