import styled from 'styled-components';
import {Box} from '../../shared';
import mediaQuery from '../../utils/mediaQuery';
import {theme} from '../../theme';

export const AlbumsWrapper = styled(Box)(
  mediaQuery(
    {
      marginBottom: [theme.space[6], theme.space[7]],
      h2: {
        color: [theme.colors.primary],
        fontSize: [theme.fontSizes[5], theme.fontSizes[5], theme.fontSizes[6]],
      },
      img: {
        width: ['80%', '100%', '40%'],
      },
      iframe: {
        border: `1px solid ${theme.colors.primaryMuted}`,
        height: ['250px', '350px', '350px'],
        width: ['100%', '100%', '550px'],
        margin: ['0', '0 auto'],
        marginTop: ['20px', '20px', 'unset'],
      },
    }
  )

);
export const LineupWrapper = styled('ul')(
  {
    whiteSpace: 'nowrap',
  },
  mediaQuery(
    {
      marginTop: [theme.space[5], theme.space[5]],
      marginBottom: [theme.space[3], theme.space[5]],
    }
  )
);
