import styled from 'styled-components';
import {space, layout, color, border, typography, flexbox} from 'styled-system';
import mediaQuery from '../../utils/mediaQuery';
import {theme} from '../../theme';
import {Box} from '../../shared';
const closeNav = (props => 
  (props.isOpenNav ? 'auto' : '0'));

export const NavWrapper = styled('nav')(
  { 
    overflow: 'hidden',
    background: theme.colors.background,
    width: '100%',
  },
  mediaQuery(
    {
      display: ['unset', 'unset', 'flex', 'flex'],
      justifyContent: ['unset', 'unset', 'space-between', 'space-between'],
      alignItems: 'end',
      height: [closeNav, closeNav, theme.space[5], theme.space[5]],
      position: ['absolute', 'absolute', 'initial', 'initial'],
      borderBottom: [
        (props => (props.isOpenNav ?
          `${theme.space[4]}px solid ${theme.colors.primary}` : 'none')),
        (props => (props.isOpenNav ?
          `${theme.space[4]}px solid ${theme.colors.primary}` : 'none')),
        'none', 'none'],
      paddingRight: ['unset', 'unset', `${theme.space[4]}px`],
      paddingBottom: props => (props.isOpenNav ?
        `${theme.space[4]}px` : '0'),
      borderTop: ['none', 'none'],
    }
  ),
  space,
  layout,
  color,
  typography,
  flexbox
);

export const LanguageSelectorWrapper = styled(Box)(
  mediaQuery(
    {
      order: ['1', '10'],
      padding: [`${theme.space[4]}px`, `${theme.space[4]}px`, '0'],
    }
  )
);

export const NavItem = styled('span')(
  //https://css-tricks.com/navigation-in-lists-to-be-or-not-to-be/
  {
    display: 'block',
    'a:any-link': {
      color: theme.colors.primary,
    },
    'a:hover': {
      color: theme.colors.muted,
    },
  },
  mediaQuery({
    fontSize: [theme.fontSizes[2], theme.fontSizes[1], theme.fontSizes[1]],
    display: ['flex', 'flex', 'unset', 'unset'],
    justifyContent: ['end', 'end', 'unset'],
    padding: 
      [`${theme.space[2]}px`, `${theme.space[2]}px`, `${theme.space[0]}px`],
    borderTop: [
      `1px solid ${theme.colors.dimGray}`, 
      `1px solid ${theme.colors.dimGray}`, 
      'none', 
      'none'],
    'a:any-link': {
      padding: [theme.space[2], theme.space[2], '0'],
      display: ['block', 'block', 'unset'],
      width: [`100px`, `100px`, 'unset'],
      textAlign: ['right', 'right', 'unset'],
    },
  }),
  space,
  layout,
  color,
  flexbox
);
export const NavViewControl = styled(Box)(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: theme.space[5],
    backgroundColor: theme.colors.primaryMuted,
    border: `1px solid ${theme.colors.primary}`,
    borderBottom: (props => (props.isOpenNav ?
      'none' : `1px solid ${theme.colors.primary}`)),
    color: 'black',
    padding: theme.space[2],
    fontSize: theme.fontSizes[2],

  },
  mediaQuery({
    display: ['flex', 'flex', 'none', 'none'],
  }),
  space,
  layout,
  color,
  border,
  typography
);
