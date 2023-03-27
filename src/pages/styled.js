import styled from 'styled-components';
import {HeadingSmall, Box} from '../shared';
import {theme} from '../theme';

export const PageWrapper = styled(Box)(
  {
    height: '100%',
    paddingLeft: theme.space[3],
    paddingRight: theme.space[3],
  }
);
export const PageTitle = styled(HeadingSmall)(
  {
    color: theme.colors.primaryMuted,
    fontSize: theme.fontSizes[6],
    marginBottom: theme.space[4],
  }
);
export const QuotedTextWrapper = styled(Box)(
  {
    color: props => (theme.colors[props.color]),
    fontSize: props => (theme.fontSizes[props.fontSize]),
  }
);
