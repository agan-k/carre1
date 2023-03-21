import facepaint from 'facepaint';
import {theme} from '../theme';

const mediaQuery = facepaint(theme.breakpoints.map(
  bp => `@media(min-width: ${bp})`));
export default mediaQuery;
