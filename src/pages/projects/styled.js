import styled from 'styled-components';
import {theme} from '../../theme';
import {Box} from '../../shared';
import mediaQuery from '../../utils/mediaQuery';

export const ProjectWrapper = styled(Box)(
  {
  },
  mediaQuery(
    {
      position: 'relative',
      display: ['block', 'unset', 'flex', 'flex'],
      img: {
        border: `1px solid ${theme.colors.primaryMuted}`,
        width: ['80%', '80%', '100%'],
      },
      h2: {
        margin: ['0'],
        fontSize: [theme.fontSizes[5], theme.fontSizes[5], theme.fontSizes[6]],
        color: [theme.colors.primary],
        position: ['absolute', 'absolute', 'initial'],
        top: ['-55px', theme.space[5], 'unset'],

      },
      marginTop: [theme.space[7],theme.space[7],theme.space[5]],
      marginBottom: ['unset','unset',theme.space[7]],
    }
  )
);
