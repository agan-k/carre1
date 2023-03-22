import styled from 'styled-components';
import {space, layout, color} from 'styled-system';

export const TracklistWrapper = styled.div(
  {
    height: props => (props.isOpenTrackList ? 'auto' : '0'),
    overflow: 'hidden',
    width: '100%',
  },
  space,
  layout,
  color
);
