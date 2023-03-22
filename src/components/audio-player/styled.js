import styled from 'styled-components';
import {space, layout, color, flexbox} from 'styled-system';
import {theme} from '../../theme';
import mediaQuery from '../../utils/mediaQuery';

export const AudioPlayerContainer = styled.div(
  {
    backgroundColor: 'white',
    position: 'relative',
    height: 'inherit',
    height: theme.space[5],
  },
  mediaQuery({
    minWidth: ['unset', '300px'],

  }),
  space,
  layout,
  color,
  flexbox
);
