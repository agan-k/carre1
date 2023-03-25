import styled from "styled-components";
import {Button} from '../../shared';
import {theme} from '../../theme';

export const LanguageSelectorButton = styled(Button)(
  {
    padding: theme.space[2],
    paddingLeft: theme.space[4],
    fontSize: theme.fontSizes[1],
    backgroundColor: theme.colors.background,
    color: theme.colors.primary,
  }
);
export const GlobeIcon = styled('span')(
  {
    fontSize: '12px', 
    lineHeight: '1',
  }
);
