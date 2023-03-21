import styled from "styled-components";
import {Text} from "../../../shared";
import {theme} from '../../../theme';

export const MusicalNotesWrapper = styled(Text)(
  {
    fontSize: props => (props.fontSize),
    display: 'flex',
    alignSelf: 'center',
    visibility: props => (props.visibility),
    color: theme.colors.primary,
  }
);
