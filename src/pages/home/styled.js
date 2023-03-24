import styled from 'styled-components';
import {Box} from '../../shared';
import mediaQuery from '../../utils/mediaQuery';
import {theme} from '../../theme';

export const NewsWrapper = styled(Box)(
  {
    'p': {
      margin: '0',
      padding: '0',
    },
  },
  mediaQuery(
    {
      'p': {
        margin: ['unset', theme.space[4], theme.space[5]],
        marginTop: [theme.space[5], 'unset', 'unset'],
        paddingLeft: ['unset', theme.space[5], theme.space[6]],
        paddingRight: ['unset', theme.space[5], theme.space[6]],
      },
    }
  )
);
