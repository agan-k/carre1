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
      margin: [theme.space[2], theme.space[2], theme.space[5]],
      marginLeft: ['0', '0', theme.space[2]],
      width: ['35%', '40%', '20%'],
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
