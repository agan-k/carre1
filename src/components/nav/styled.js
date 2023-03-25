import styled from 'styled-components';
import {space, layout, color, border, typography, flexbox} from 'styled-system';
import mediaQuery from '../../utils/mediaQuery';
import {theme} from '../../theme';
import {Button} from '../../shared';
const closeNav = (props => 
  (props.isOpenNav ? 'auto' : '0'));

export const NavWrapper = styled('nav')(
  { 
    overflow: 'hidden',
    background: theme.colors.background,
  },
  mediaQuery(
    {
      display: ['block', 'block', 'flex', 'flex'],
      alignItems: 'center',
      height: [closeNav, closeNav, theme.space[5], theme.space[5]],
      position: ['absolute', 'absolute', 'initial', 'initial'],
      right: ['0'],
      width: ['100%', 'unset', 'unset'],
      paddingRight: ['0', theme.space[3], theme.space[3]],
      borderBottom: [(props => (props.isOpenNav ?
        `4px solid ${theme.colors.primaryMuted}` : 'none')), 'none', 'none'],
      paddingBottom: props => (props.isOpenNav ?
        `${theme.space[1]}px` : '0'),
    }
  ),
  space,
  layout,
  color,
  typography,
  flexbox
);
export const NavGroup = styled('ul')(
  mediaQuery({
    display: ['block', 'block', 'flex', 'flex'],
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
    },
    'a:hover': {
      color: theme.colors.muted,
    },
  },
  mediaQuery({
    fontSize: [theme.fontSizes[2], theme.fontSizes[1], theme.fontSizes[1]],
    textAlign: ['right', 'center', 'center'],
    padding: 
      [`${theme.space[1]}px`, `${theme.space[2]}px`, `${theme.space[2]}px`],
    paddingLeft: ['unset', '0', '0'],
    borderTop: [`1px solid ${theme.colors.dimGray}`, 'none', 'none'],
    'a:any-link': {
      paddingLeft: '0',
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
    backgroundColor: theme.colors.primaryMuted,
    border: `1px solid ${theme.colors.primary}`,
    color: 'black',
    fontSize: theme.fontSizes[2],
    textAlign: 'right',
  },
  mediaQuery({
    display: ['block', 'block', 'none', 'none'],
    padding: [`${theme.space[2]}px`, `${theme.space[2]}px`, '0', '0'],
  }),
  space,
  layout,
  color,
  border,
  typography
);
