import styled from 'styled-components';
import {Box} from '../../shared';
import {theme} from '../../theme'

export const BioImageWrapper = styled(Box)(
  {
    float: 'left',
    border: `1px solid ${theme.colors.primaryMuted}`,
  }
);
