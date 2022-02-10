import {Dimensions, Platform} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';

const {width, height} = Dimensions.get('window');

export const metrics = {
  screenWidth: width,
  screenHeight: height,
  horizontalSpacing: widthPercentageToDP(3.5),
  backButtonPadding: Platform.OS === 'android' ? 10 : 0,
};
