import styled from "styled-components";
import {Button, Box} from "../../../../shared";
import {theme} from '../../../../theme';

export const TrackButton = styled(Button)(
  {
    fontSize: '14px',
    fontStyle: 'italic',
    width: '200px',
    padding: theme.space[4],
    color: props => (!props.active ? 'black' : theme.colors.primary),
    borderTop: '1px solid #efefef',
    backgroundColor: 'white',
    borderLeft: '1px solid #efefef',
    textAlign: 'right',
  }
);
export const TrackWrapper = styled(Box)(
  {
    textAlign: 'right',
  }
);
