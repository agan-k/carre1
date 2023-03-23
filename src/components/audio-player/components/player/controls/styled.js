import styled from 'styled-components';
import {Box} from "../../../../../shared";
import {theme} from '../../../../../theme';

export const ControlsContainer = styled(Box)(
  {
    display: 'flex',
    justifyContent: 'space-between',
    gap: theme.fontSizes[3],
  }
);
