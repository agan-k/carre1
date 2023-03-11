import styled from 'styled-components';
import {space, layout, color} from 'styled-system';

//TODO: Find a way to adjust hight for Header, AudioPlayer,
// Nav and top margin of body with a single source of truth
export const HeaderWrapper = styled.div(
  {
    position: 'fixed',
    top: '0',
    height: 'auto',
    backgroundColor: 'black',
  },
  space,
  layout,
  color
);
