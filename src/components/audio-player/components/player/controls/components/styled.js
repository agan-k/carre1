import styled from 'styled-components';
import {Button} from '../../../../../../shared';
import {theme} from '../../../../../../theme';

const ControlsButton = styled(Button)(
  {
    color: theme.colors.primary,
    backgroundColor: theme.colors.background,
    fontSize: theme.fontSizes[1],
    paddingLeft: theme.space[3],
    paddingRight: theme.space[3],
  }
);
export default ControlsButton;
