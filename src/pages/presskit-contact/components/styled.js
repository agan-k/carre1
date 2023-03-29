import styled from 'styled-components';
import {Text, Box} from '../../../shared';
import {theme} from '../../../theme';

export const SourceWrapper = styled(Text)(
  {
    textAlign: 'right',
    fontWeight: theme.fontWeights.bold,
    fontStyle: 'italic',
    fontSize: theme.fontSizes[2],
    marginTop: theme.space[1],
  }
);
export const PresskitContactContainer = styled(Box)(
  {
    borderLeft: `3px solid ${theme.colors.primaryMuted}`,
    padding: theme.space[4],
  }
);
export const DownloadWrapper = styled(Text)(
  {
    'a:any-link': {
      color: theme.colors.primary,
    },
  }
);
