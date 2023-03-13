import styled from 'styled-components';
import {space, layout, color} from 'styled-system';
import {theme} from '../../theme';

export const NavWrapper = styled('div')(
  {
    height: props => (props.isNavOpen ? 'auto' : '0'),
    overflow: 'hidden',
    width: '80%',
    margin: '0 auto',
  },
  space,
  layout,
  color
);
export const NavList = styled('ul')(
  space,
  layout,
  color
);
export const NavListItem = styled('li')(
  {
    display: 'block',
    backgroundColor: 'grey',
    borderBottom: `1px solid ${theme.colors.primary}`,
    textAlign: 'center',
    padding: theme.space[4],
    // height: props => (props.)...for desktop
  },
  space,
  color
);
export const NavViewControl = styled('button')(
  {
    width: '100%',
  },
  space,
  layout,
  color
);
