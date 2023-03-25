import styled from 'styled-components';
import {HeadingSmall, Box} from '../shared';
import {theme} from '../theme';
import mediaQuery from '../utils/mediaQuery';

export const PageWrapper = styled(Box)(
  {
    paddingLeft: theme.space[3],
    paddingRight: theme.space[3],
  },
  mediaQuery(
    {
    }
  )
);
export const PageTitle = styled(HeadingSmall)(
  {
    color: theme.colors.primary,
    fontSize: theme.fontSizes[6],
    marginBottom: theme.space[4],
  }
);
