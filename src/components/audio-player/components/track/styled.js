import styled from "styled-components";
import {flexbox} from 'styled-system';
import {Button, Box} from "../../../../shared";
import {theme} from '../../../../theme';

export const TrackWrapper = styled(Box)(
  {
    display: 'flex',
    flexDirection: 'row-reverse',
  }
);
export const TrackButton = styled(Button)(
  {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px',
    fontStyle: 'italic',
    textAlign: 'left',
    width: '200px',
    padding: theme.space[4],
    color: props => (!props.active ? 'gray' : theme.colors.primary),
    borderTop: '1px solid #efefef',
    backgroundColor: 'white',
    borderLeft: '1px solid #efefef',
  },
  flexbox
);
