import styled from 'styled-components';
import {Box} from '../../shared';
import {theme} from '../../theme';
import mediaQuery from '../../utils/mediaQuery';

export const BioImageWrapper = styled(Box)(
  {
    float: 'left',
    border: `1px solid ${theme.colors.primaryMuted}`,
  },
  mediaQuery(
    {
      marginLeft: [theme.space[2], theme.space[1], theme.space[1]],
      marginRight: [theme.space[2], theme.space[2], theme.space[4]],
      marginBottom: '0',
      width: ['40%', '40%', '30%'],
    }
  )
);
export const BioWrapper = styled(Box)(
  {
    p: {
      marginTop: '0',
    },
  }
);
