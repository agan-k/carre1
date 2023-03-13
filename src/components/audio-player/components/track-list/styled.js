import styled from 'styled-components';
import {space, layout, color} from 'styled-system';

export const TracklistWrapper = styled.div(
  {
    height: props => (props.isOpenTrackList ? '100%' : '0'),
    overflow: 'hidden',
  },
  space,
  layout,
  color
);
