import {createGlobalStyle} from 'styled-components';
import {theme} from '../theme';

export const GlobalStyle = createGlobalStyle(
  {
    body: {
      margin: '0 auto',
      maxWidth: '1200px',
      fontFamily: 'Verdana',
      background: 'black',
      color: theme.colors.muted,
      input: {
        borderRadius: '0',
        '-webkit-appearance': 'none',
        '-moz-appearance': 'none',
        appearance: 'none',
      },
      ul: {
        listStyle: 'none',
        margin: '0',
        padding: '0',
      },
      'a:any-link': {
        color: 'white',
        textDecoration: 'none',
      },
      blockquote: {
        margin: '20px',
      },
      iframe: {
        border: 'none',
      },
    },
  }
);
