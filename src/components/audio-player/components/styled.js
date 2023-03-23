import styled from "styled-components";
import {Text} from "../../../shared";

export const MusicalNotesWrapper = styled(Text)(
  {
    fontSize: props => (props.fontSize),
    display: 'flex',
    alignSelf: 'center',
    visibility: props => (props.visibility),
  }
);
