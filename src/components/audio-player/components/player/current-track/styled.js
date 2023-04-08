import styled from "styled-components";
import {Text, Box} from "../../../../../shared";
import {theme} from '../../../../../theme';

export const CurrentTrackWrapper = styled(Box)(
  {
    alignSelf: 'center',
    paddingLeft: theme.space[3],
    paddingRight: theme.space[6],
    maxWidth: theme.space[6],
  }
);
export const CurrentTrackText = styled(Text)(
  {
    fontSize: theme.fontSizes[0],
    color: 'black',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    fontStyle: 'italic',
    cursor: 'pointer',
    ':hover': {
      color: theme.colors.muted,
    },
  }
);
