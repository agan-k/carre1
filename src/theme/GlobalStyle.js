import {createGlobalStyle} from 'styled-components';
import {theme} from '../theme';

export const GlobalStyle = createGlobalStyle(
  {
    body: {
      margin: '0 auto',
      maxWidth: '1200px',
      fontFamily: 'Verdana',
      background: theme.colors.background,
      color: theme.colors.muted,
      ul: {
        listStyle: 'none',
        margin: '0',
        padding: '0',
      },
      'a:any-link': {
        color: theme.colors.lightGray,
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
