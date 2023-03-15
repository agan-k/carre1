import styled from "styled-components";
import {Text} from "../../../shared";
import {theme} from '../../../theme';

export const MusicalNotesWrapper = styled(Text)(
  {
    display: 'flex',
    alignSelf: 'center',
    color: theme.colors.primary,
  }
);
