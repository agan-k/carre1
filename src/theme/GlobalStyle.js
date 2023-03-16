import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle(
  {
    body: {
      margin: '0 auto',
      maxWidth: '1200px',
      fontFamily: 'Verdana',
      background: 'black',
      color: 'white',
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
    },
  }
);
