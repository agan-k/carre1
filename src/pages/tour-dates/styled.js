import styled from 'styled-components';
import {Box} from '../../shared';
import {theme} from '../../theme';
import mediaQuery from '../../utils/mediaQuery';

export const CalendarCardWrapper = styled(Box)(
  {
    margin: theme.space[3],
    a: {
      fontWeight: '700',
    },
  },
  mediaQuery(
    {
      width: ['unset', 'unset', '45%'],
      borderTop: ['none', 'none', `1px solid ${theme.colors.primaryMuted}`],
      padding: ['none', 'none', theme.space[2]],
      ul: {
        paddingBottom: theme.space[4],
      },
      p: {
        paddingBottom: theme.space[4],
        margin: '0',
      },
      img: {
        width: ['100%', '100%', '50%'],
        border: `1px solid ${theme.colors.primaryMuted}`,
      },
      marginBottom: theme.space[6],

    }
  )
);
