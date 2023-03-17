import styled from 'styled-components';
import {Box} from '../../shared';
import {theme} from '../../theme';

export const CalendarCardWrapper = styled(Box)(
  {
    borderLeft: `3px solid ${theme.colors.primary}`,
    paddingLeft: theme.space[4],
    ul: {
      paddingBottom: theme.space[4],
    },
    p: {
      paddingBottom: theme.space[4],
      margin: '0',
    },
    marginBottom: theme.space[6],
  }
);
