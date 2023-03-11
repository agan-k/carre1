import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle(
  {
    body: {
      marginTop: '500px',
      fontFamily: 'Verdana',
      background: 'black',
      color: 'white',
      ul: {
        listStyle: 'none',
      },
      'a:any-link': {
        color: 'white',
        textDecoration: 'none',
      },
    },
  }
);
