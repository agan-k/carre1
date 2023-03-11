import styled from 'styled-components';
import {space, layout, color} from 'styled-system';

export const AudioPlayerWrapper = styled.div(
  {
    border: '1px solid blue',
    height: props => (props.isOpen ? '100%' : '65px'),
    overflow: 'hidden',
  },
  space,
  layout,
  color
);
