import styled from 'styled-components';
import {space, layout, color, flexbox} from 'styled-system';
import mediaQuery from '../../utils/mediaQuery';

export const AudioPlayerContainer = styled.div(
  {
    position: 'relative',
  },
  mediaQuery({
    width: ['100%', '100%', '300px', '300px'],
  }),
  space,
  layout,
  color,
  flexbox
);
