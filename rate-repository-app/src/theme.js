import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textHeader: 'white',
    primary: '#0366d6',
    barBackground: '#24292e',
    error: '#d73a4a',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    heading: 18,
  },
  fonts: Platform.select({
    default: 'System',
    ios: 'Arial',
    android: 'Roboto',
  }),
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
};

export default theme;
