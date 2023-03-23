import styled from "styled-components";
import {Box} from "../../../../shared";
import {theme} from '../../../../theme';

export const PlayerContainer = styled(Box)(
  {
    display: 'flex',
    height: 'inherit',
    paddingLeft: theme.space[3],
    paddingRight: theme.space[3],
    border: `1px solid ${theme.colors.primary}`,
    background: theme.colors.primaryMuted,
    color: theme.colors.muted,
    justifyContent: 'space-between',
  }
);
