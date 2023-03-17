import styled from 'styled-components';
import {HeadingSmall} from '../shared';
import {theme} from '../theme';

export const PageTitle = styled(HeadingSmall)(
  {
    color: theme.colors.primary,
    fontSize: theme.fontSizes[6],
    marginBottom: theme.space[4],
  }
);
