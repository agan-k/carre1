import styled from 'styled-components';
import {Text, Box} from '../../../shared';
import {theme} from '../../../theme';

export const SourceWrapper = styled(Text)(
  {
    textAlign: 'right',
    fontWeight: '600',
    fontStyle: 'italic',
    fontSize: '14px',
  }
);
export const PresskitContactContainer = styled(Box)(
  {
    borderLeft: `3px solid ${theme.colors.primary}`,
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
