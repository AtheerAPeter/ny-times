import {StyleSheet, Image, View, TouchableOpacity, Share} from 'react-native';
import React from 'react';
import {INavigation} from '../../@types/INavigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
// @ts-ignore
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {Label} from '../../components/Label';
import {Doc} from '../../@types';
import {colors, fontType} from '../../components/theme';
import moment from 'moment';
import Icon from 'react-native-dynamic-vector-icons';
import {Col} from '../../components/layout/Col';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Row} from '../../components/layout/Row';

const Details = (props: NativeStackScreenProps<INavigation, 'Details'>) => {
  const item: Doc = props.route.params.item;

  const {top} = useSafeAreaInsets();
  const back = () => {
    props.navigation.pop();
  };

  const share = () => {
    Share.share({
      message: `${item.snippet} - ${item.webUrl}`,
    });
  };

  const parallaxForeground = () => {
    return (
      <Col
        justifyContent="space-between"
        style={[styles.foreGround, {paddingTop: top + 10}]}>
        <Row
          style={styles.header}
          alignItems="center"
          justifyContent="space-between">
          <TouchableOpacity style={styles.backBtn} onPress={back}>
            <Icon name="left" type="AntDesign" size={20} color={colors.white} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.backBtn} onPress={share}>
            <Icon
              name="ios-share-social"
              type="Ionicons"
              size={20}
              color={colors.white}
            />
          </TouchableOpacity>
        </Row>

        <View>
          <Label
            size="H2"
            weight="SemiBold"
            color={colors.white}
            style={styles.title}>
            {item.headline.main}
          </Label>
          <Label style={styles.date} size="Secondary" color={colors.lightGray}>
            {moment(item.pubDate).format('DD/MM/YYYY')}
          </Label>
        </View>
      </Col>
    );
  };
  const parallaxBackground = () => {
    return (
      <View style={styles.imageWrapper}>
        <LinearGradient
          colors={['#0000000f', '#0000005f', '#0000008f']}
          style={styles.linearGradient}
        />
        <Image
          style={styles.image}
          source={{
            uri: `https://www.nytimes.com/${item.multimedia?.[0]?.url}`,
          }}
        />
      </View>
    );
  };

  return (
    <ParallaxScrollView
      backgroundColor="transparent"
      parallaxHeaderHeight={heightPercentageToDP(45)}
      backgroundSpeed={10}
      renderForeground={parallaxForeground}
      renderBackground={parallaxBackground}>
      <View style={styles.content}>
        <Label size="H3">
          {item.source} - {item.newsDesk}
        </Label>
        <Label size="Small" color={colors.grayBlue}>
          {item.byline.original}
        </Label>
        <Label
          style={[styles.paragraph, styles.sparing10]}
          color={colors.darkGray}>
          {item.leadParagraph}
        </Label>
        <Label
          style={[styles.paragraph, styles.sparing10]}
          color={colors.darkGray}>
          {item.snippet}
        </Label>
      </View>
    </ParallaxScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({
  imageWrapper: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(45),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1,
  },
  foreGround: {
    height: '100%',
    paddingBottom: 20,
  },
  title: {
    fontFamily: fontType.bold,
    width: widthPercentageToDP(90),
    paddingLeft: 20,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  date: {
    marginTop: 10,
    paddingLeft: 20,
  },
  backBtn: {
    backgroundColor: colors.transparentGrye,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  paragraph: {
    lineHeight: 25,
  },
  sparing10: {
    marginTop: 10,
  },
  header: {
    paddingHorizontal: 20,
  },
});
