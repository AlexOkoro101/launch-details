import { extendTheme } from '@chakra-ui/react';
const colors = {
  primary: {
    100: "#5bb543"
  },
  text: {
    gray: {
      100: "#9a9a9a",
      200: "#8b8b9b"
    }
  }
};

const fonts = {
  body: 'Lato, sans-serif'
};

const theme = extendTheme({
  colors,
  fonts
})

export default theme;