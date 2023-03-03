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

const styles = {
  global: {
    '.pagination': {
      display: 'flex',
      gap: '1rem',
    },
    '.pagination li': {
      listStyle: 'none'
    },
    '.page-number': {
      color: '#808080',
      fontSize: '14px',
      lineHeight: '21px',
    },
    '.active-link': {
      padding: '2px 6px',
      backgroundColor: 'primary.100',
      color: '#fff',
      borderRadius: '3px',
    }
  }
};

const fonts = {
  body: 'Lato, sans-serif'
};

const theme = extendTheme({
  colors,
  fonts,
  styles
})

export default theme;