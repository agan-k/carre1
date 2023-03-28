import {createGlobalStyle} from 'styled-components';
import {theme} from '../theme';

export const GlobalStyle = createGlobalStyle(
  {
    html: {
      background: theme.colors.primaryMuted,
    },
    body: {
      margin: '0 auto',
      maxWidth: '1200px',
      fontFamily: 'Verdana',
      background: theme.colors.background,
      color: theme.colors.muted,
      p: {
        lineHeight: '1.6',
      },
      ul: {
        listStyle: 'none',
        margin: '0',
        padding: '0',
      },
      'a:any-link': {
        color: theme.colors.primary,
      },
      'a:hover': {
        color: theme.colors.muted,
      },
      strong: {
        color: theme.colors.primary,
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
