import {Outlet} from "react-router-dom";
import {ThemeProvider} from 'styled-components';
import theme from './theme';

import {Nav} from "./components";

export default function app() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Outlet />
    </ThemeProvider>
  );
}
