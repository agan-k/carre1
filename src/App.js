import {Outlet, Link} from "react-router-dom";
import {ThemeProvider} from 'styled-components';
import theme from './theme';

export default function app() {
  return (
    <ThemeProvider theme={theme}>
      <nav>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/projects'}>Projects</Link></li>
        </ul>
      </nav>
      <Outlet />
    </ThemeProvider>
  );
}
