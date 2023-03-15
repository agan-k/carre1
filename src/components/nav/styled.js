import styled from 'styled-components';
import {space, layout, color, border, typography, flexbox} from 'styled-system';
import {theme} from '../../theme';
import {Button} from '../../shared';

export const NavWrapper = styled('nav')(
  {
    height: props => (props.isNavOpen ? 'auto' : '0'),
    overflow: 'hidden',
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
export const NavViewControl = styled(Button)(
  {
    width: '100%',
    backgroundColor: '#efefef',
  },
  space,
  layout,
  color,
  border,
  typography
);
