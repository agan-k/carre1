import styled from 'styled-components';
import {HeadingSmall, Box} from '../shared';
import {theme} from '../theme';

export const PageWrapper = styled(Box)(
  {
    paddingLeft: theme.space[3],
    paddingRight: theme.space[3],
  }
);
export const PageTitle = styled(HeadingSmall)(
  {
    color: theme.colors.primary,
    fontSize: theme.fontSizes[6],
    marginBottom: theme.space[4],
  }
);
