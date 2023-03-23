import styled from 'styled-components';
import {space, layout, color, border, typography, flexbox} from 'styled-system';
import mediaQuery from '../../utils/mediaQuery';
import {theme} from '../../theme';
import {Button} from '../../shared';

export const NavWrapper = styled('nav')(
  { 
    overflow: 'hidden',
    background: theme.colors.background,
  },
  mediaQuery({
    display: ['block', 'flex'],
    alignItems: 'center',
    height: [(props => (props.isOpenNav ? 'auto' : '0')), theme.space[5]],
    position: ['absolute', 'initial'],
    right: ['0'],
    width: ['100%', 'unset'],
    paddingRight: ['0', theme.space[3]],
    paddingBottom: props => (props.isOpenNav ?
      `${theme.space[4]}px` : '0'),
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
      color: theme.colors.primary,
      fontSize: theme.fontSizes[1],
    },
    'a:hover': {
      color: theme.colors.muted,
    },
  },
  mediaQuery({
    textAlign: ['right', 'center'],
    padding: [`${theme.space[1]}px`, '0'],
    borderTop: [`1px solid ${theme.colors.dimGray}`, 'none'],
  }),
  space,
  layout,
  color,
  flexbox
);
export const NavViewControl = styled(Button)(
  {
    width: '100%',
    backgroundColor: theme.colors.background,
    // borderBottom: '2px solid #36454F',
    color: theme.colors.primary,
    fontSize: theme.fontSizes[2],
    textAlign: 'right',
  },
  mediaQuery({
    display: ['block', 'none'],
    padding: [`${theme.space[3]}px`, '0'],
  }),
  space,
  layout,
  color,
  border,
  typography
);
