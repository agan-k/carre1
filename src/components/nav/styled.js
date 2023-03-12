import styled from 'styled-components';
import {space, layout, color} from 'styled-system';

export const NavWrapper = styled('div')(
  {border: '1px solid red'},
  space,
  layout,
  color
);
export const NavList = styled('ul')(
  {
    // height: props => (props.)...for desktop
  },
  space,
  layout,
  color
);
export const NavListItem = styled('li')(
  {
    display: 'block',
    backgroundColor: 'grey',
    margin: '2px',
    padding: '10px',
    textAlign: 'center',
    // height: props => (props.)...for desktop
  },
  space,
  color
);
