import styled from 'styled-components';
import {Button} from '../../../../../../shared';
import {theme} from '../../../../../../theme';

const ControlsButton = styled(Button)(
  {
    backgroundColor: 'white',
    color: 'grey',
    fontSize: theme.fontSizes[1],
  }
);
export default ControlsButton;
