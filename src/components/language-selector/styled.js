import styled from "styled-components";
import {Box} from '../../shared';
import {theme} from '../../theme';
import mediaQuery from "../../utils/mediaQuery";

export const LanguageSelectorButton = styled(Box)(
  {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'end',
    fontSize: theme.fontSizes[1],
    backgroundColor: theme.colors.background,
    color: theme.colors.primary,
  },
  mediaQuery(
    {
      cursor: ['none', 'none', 'pointer'],
      ':hover': {
        color: ['none', 'none', theme.colors.muted],
      },
    }
  )
);
export const GlobeIcon = styled('span')(
  {
    fontSize: theme.fontSizes[1], 
  }
);
