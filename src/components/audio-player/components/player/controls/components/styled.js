import styled from 'styled-components';
import {space, layout, color, flexbox, typography} from 'styled-system';

const ControlsButton = styled('button')(
  {
    width: '40px',
    height: '40px',
    border: 'none',
    backgroundColor: 'white',
    fontSize: '18px',
    color: 'gray',
  },
  space,
  layout,
  color,
  flexbox,
  typography
);
export default ControlsButton;
