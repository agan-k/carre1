import styled from "styled-components";
import {Text, Box} from "../../../../shared";
import {theme} from '../../../../theme';

export const PlayerContainer = styled(Box)(
  {
    display: 'flex',
    justifyContent: 'space-between',
  }
);
export const CurrentTrack = styled(Text)(
  {
    display: 'flex',
    justifyContent: 'space-between',
    minWidth: '120px', 
    color: theme.colors.primary,
    fontSize: '14px',
    fontStyle: 'italic',
  }
);
