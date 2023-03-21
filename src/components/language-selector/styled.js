import styled from "styled-components";
import {Button} from '../../shared';
import {theme} from '../../theme';

export const LanguageSelectorButton = styled(Button)(
  {
    paddingRight: theme.space[2],
    fontSize: theme.fontSizes[1],
    backgroundColor: theme.colors.faintGray,
  }
);
