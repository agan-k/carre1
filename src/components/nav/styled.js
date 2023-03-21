import styled from 'styled-components';
import {space, layout, color, border, typography, flexbox} from 'styled-system';
import mediaQuery from '../../utils/mediaQuery';
import {theme} from '../../theme';
import {Button} from '../../shared';

export const NavWrapper = styled('nav')(
  { 
    overflow: 'hidden',
  },
  mediaQuery({
    display: ['block', 'flex'],
    height: [(props => (props.isOpenNav ? 'auto' : '0')), 'auto'],
  }),
  space,
  layout,
  color,
  typography,
  flexbox
);
export const NavGroup = styled('ul')(
  mediaQuery({
    display: ['block', 'flex'],
  }),
  space,
  layout,
  color,
  flexbox
);
export const NavItem = styled('li')(
  {
    'a:any-link': {
      padding: theme.space[2],
      display: 'inline-block',
    },
  },
  mediaQuery({
    textAlign: ['right', 'center'],
    padding: [`${theme.space[2]}px`, '0'],
    paddingRight: ['0'],
    borderBottom: [`1px solid ${theme.colors.primary}`, 'none'],
    'a:any-link': {
      width: ['100px', 'auto'],
    },
  }),
  space,
  layout,
  color,
  flexbox
);
export const NavViewControl = styled(Button)(
  {
    width: '100%',
    backgroundColor: theme.colors.faintGray,
    fontSize: theme.fontSizes[1],
    textAlign: 'right',
  },
  mediaQuery({
    display: ['block', 'none'],
    padding: [`${theme.space[2]}px`, '0'],
  }),
  space,
  layout,
  color,
  border,
  typography
);
