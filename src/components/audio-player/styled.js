import styled from 'styled-components';
import {space, layout, color, flexbox} from 'styled-system';
import {theme} from '../../theme';

export const AudioPlayerContainer = styled.div(
  {
    position: 'relative',
    height: theme.space[5],
  },
  space,
  layout,
  color,
  flexbox
);
