import styled from 'styled-components';
import {space, layout, color, flexbox} from 'styled-system';
import {theme} from '../../theme';
import mediaQuery from '../../utils/mediaQuery';

export const AudioPlayerContainer = styled.div(
  {
    position: 'relative',
    height: theme.space[5],
  },
  mediaQuery({
    width: ['100%', '300px'],
  }),
  space,
  layout,
  color,
  flexbox
);
