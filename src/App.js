import {Outlet} from "react-router-dom";
import {ThemeProvider} from 'styled-components';
import theme from './theme';

import {Nav} from "./components";
import Header from "./layout/Header";

export default function app() {
  return (
    <ThemeProvider theme={theme}>
      <Header>
        <Nav />
      </Header>
      <Outlet />
    </ThemeProvider>
  );
}
