import styled from 'styled-components';
import {Button} from '../../../../../../shared';
import {theme} from '../../../../../../theme';

const ControlsButton = styled(Button)(
  {
    backgroundColor: 'white',
    color: 'grey',
    fontSize: theme.fontSizes[1],
    paddingLeft: theme.space[3],
    paddingRight: theme.space[3],
    paddingTop: theme.space[2],
    paddingBottom: theme.space[2],
  }
);
export default ControlsButton;
