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
    fontSize: '14px',
    fontStyle: 'italic',
    textAlign: 'left',
    width: '100%',
    padding: theme.space[3],
    marginLeft: theme.space[1],
    marginRight: theme.space[1],
    color: props => 
      (!props.active ? theme.colors.primary : theme.colors.primaryMuted),
    border: `1px solid ${theme.colors.primaryMuted}`,
    borderTop: 'none',
    backgroundColor: theme.colors.background,
    cursor: 'pointer',
  },
  flexbox
);
