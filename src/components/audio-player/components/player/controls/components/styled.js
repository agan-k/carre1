import styled from 'styled-components';
import {Button} from '../../../../../../shared';
import {theme} from '../../../../../../theme';

const ControlsButton = styled(Button)(
  {
    color: theme.colors.primary,
    backgroundColor: theme.colors.background,
    fontSize: theme.fontSizes[3],
    padding: '0',
  }
);
export default ControlsButton;
