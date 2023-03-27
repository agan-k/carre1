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
      // justifyContent: ['unset', 'unset', 'space-between'],
      img: {
        border: `1px solid ${theme.colors.primaryMuted}`,
      },
      h2: {
        margin: ['0'],
        fontSize: [theme.fontSizes[5], theme.fontSizes[5], theme.fontSizes[6]],
        // background: theme.colors.background,
        color: [theme.colors.primary],
        position: ['absolute', 'absolute', 'initial'],
        top: ['-45px', theme.space[5], 'unset'],

      },
      marginTop: [theme.space[7],theme.space[7],theme.space[5]],
      marginBottom: ['unset','unset',theme.space[7]],
      borderBottom: [
        `1px solid ${theme.colors.primaryMuted}`, 
        `1px solid ${theme.colors.primaryMuted}`,
        'none',
      ],
    }
  )
);
