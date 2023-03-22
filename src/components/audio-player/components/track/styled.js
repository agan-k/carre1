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
    color: props => (!props.active ? 'gray' : theme.colors.dimGray),
    borderTop: `1px solid ${theme.colors.dimGray}`,
    backgroundColor: theme.colors.background,
  },
  flexbox
);
