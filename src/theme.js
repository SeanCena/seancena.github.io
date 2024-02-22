import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    purple: {
      50: '#b8aaf8',
      900: '#5500DE',
    },
  },
});

export default theme;
