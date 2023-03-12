import styled from 'styled-components';
import {space, layout, color} from 'styled-system';

//TODO: Find a way to adjust hight for Header, AudioPlayer,
// Nav and top margin of body with a single source of truth
export const HeaderWrapper = styled.div(
  {
    margin: '0 auto',
    top: '0',
    height: 'auto',
    width: '100%',
    backgroundColor: 'black',
  },
  space,
  layout,
  color
);
