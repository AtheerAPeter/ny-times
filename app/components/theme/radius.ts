import {widthPercentageToDP} from 'react-native-responsive-screen';

export const radius = {
  none: {
    borderRadius: 0,
  },
  small: {
    borderRadius: 5,
  },
  medium: {
    borderRadius: 12,
  },
  large: {
    borderRadius: 15,
  },
  xlarge: {
    borderRadius: 25,
  },
  full: {
    borderRadius: widthPercentageToDP(100),
  },
};
