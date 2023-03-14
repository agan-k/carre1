import styled from 'styled-components';
import {space, layout, color, border, typography, flexbox} from 'styled-system';
import {theme} from '../../theme';

export const NavWrapper = styled('nav')(
  {
    height: props => (props.isNavOpen ? 'auto' : '0'),
    overflow: 'hidden',
    // width: '200px',
    // margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
  },
  space,
  layout,
  color,
  typography,
  flexbox
);
export const NavList = styled('ul')(
  space,
  layout,
  color,
  flexbox
);
export const NavListItem = styled('li')(
  {
    display: 'block',
    backgroundColor: 'grey',
    borderBottom: `1px solid #efefef`,
    textAlign: 'right',
    padding: theme.space[4],
    width: '200px',
  },
  space,
  color
);
export const NavViewControl = styled('button')(
  {
    width: '100%',
    border: 'none',
    fontSize: '18px',
  },
  space,
  layout,
  color,
  border,
  typography
);
