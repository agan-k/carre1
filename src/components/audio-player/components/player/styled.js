import styled from "styled-components";
import {Text, Box} from "../../../../shared";
import {theme} from '../../../../theme';

export const PlayerContainer = styled(Box)(
  {
    display: 'flex',
    justifyContent: 'space-between',
    height: 'inherit',
  }
);
export const CurrentTrack = styled(Text)(
  {
    alignSelf: 'center',
    paddingLeft: theme.space[3],
    color: theme.colors.primary,
    fontSize: theme.fontSizes[0],
    fontStyle: 'italic',
  }
);
