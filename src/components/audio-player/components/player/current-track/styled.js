import styled from "styled-components";
import {Text} from "../../../../../shared";
import {theme} from '../../../../../theme';

export const CurrentTrackWrapper = styled(Text)(
  {
    alignSelf: 'center',
    paddingLeft: theme.space[3],
    color: theme.colors.primary,
    fontSize: theme.fontSizes[0],
    fontStyle: 'italic',
  }
);
