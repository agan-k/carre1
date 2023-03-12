import styled from 'styled-components';
import {Box} from "../../../../../shared";

const ControlsContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  'div:nth-child(2)': {
    alignSelf: 'flex-end',
    marginTop: '-30px',
  },
});

export default ControlsContainer;
