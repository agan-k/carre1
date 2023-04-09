import styled from 'styled-components';
import mediaQuery from '../../../../../../utils/mediaQuery';
import {Button} from '../../../../../../shared';
import {theme} from '../../../../../../theme';

const ControlsButton = styled(Button)(
  {
    color: 'black',
    backgroundColor: theme.colors.primaryMuted,
    cursor: 'pointer',
    width: theme.space[5],
  },
  mediaQuery(
    {
      fontSize: [theme.fontSizes[3], theme.fontSizes[2], theme.fontSizes[2]],
      ':hover': {
        color: ['initial', 'initial', theme.colors.muted],
      },
      
    }
  )
);
export default ControlsButton;
