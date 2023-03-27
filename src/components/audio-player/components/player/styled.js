import styled from "styled-components";
import {Box} from "../../../../shared";
import {theme} from '../../../../theme';
import mediaQuery from "../../../../utils/mediaQuery";

export const PlayerContainer = styled(Box)(
  {
    display: 'flex',
    height: theme.space[5],
    border: `1px solid ${theme.colors.primary}`,
    background: theme.colors.primaryMuted,
    color: theme.colors.muted,
    justifyContent: 'space-between',
  },
  mediaQuery(
    {
      padding: [theme.space[2], theme.space[2], '0'],
    }
  )
);
