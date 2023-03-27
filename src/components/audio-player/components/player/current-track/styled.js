import styled from "styled-components";
import {Text} from "../../../../../shared";
import {theme} from '../../../../../theme';

export const CurrentTrackWrapper = styled(Text)(
  {
    alignSelf: 'center',
    paddingLeft: theme.space[3],
    paddingRight: theme.space[6],
    fontSize: theme.fontSizes[0],
    color: 'black',
    maxWidth: theme.space[8],
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    fontStyle: 'italic',
    cursor: 'pointer',
  }
);
