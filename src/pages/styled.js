import styled from 'styled-components';
import {HeadingSmall, Box} from '../shared';
import {theme} from '../theme';

export const Loading = styled(Box)(
  {
    minHeight: '1800px',
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
  }
);
export const PageWrapper = styled(Box)(
  {
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
    blockquote: {
      margin: '0',
    },
  }
);
