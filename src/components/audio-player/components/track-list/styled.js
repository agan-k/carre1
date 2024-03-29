import styled from 'styled-components';
import {space, layout, color} from 'styled-system';
import {theme} from '../../../../theme';

export const TracklistWrapper = styled.div(
  {
    position: 'absolute',
    height: props => (props.isOpenTrackList ? 'auto' : '0'),
    overflow: 'hidden',
    width: '100%',
    backgroundColor: theme.colors.background,
    paddingBottom: props => (props.isOpenTrackList ?
      `${theme.space[1]}px` : '0'),
    zIndex: '999',
  },
  space,
  layout,
  color
);
