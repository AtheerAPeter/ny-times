import {widthPercentageToDP} from 'react-native-responsive-screen';
export const fontWeight = {
  Heavy: '900',
  Bold: '800',
  SemiBold: '700',
  Medium: '600',
  Regular: '500',
  Light: '400',
  Thin: '300',
  UltraThin: '200',
};

export const fontType = {
  base: 'Px Grotesk Regular',
  bold: 'Px Grotesk Bold',
};

export const fontSizes = {
  H1: widthPercentageToDP(7),
  H2: widthPercentageToDP(6),
  H3: widthPercentageToDP(5),
  H4: widthPercentageToDP(4.5),
  Primary: widthPercentageToDP(4),
  Secondary: widthPercentageToDP(3.6),
  Tertiary: widthPercentageToDP(3.3),
  Small: widthPercentageToDP(3),
  XSmall: widthPercentageToDP(2.5),
};
