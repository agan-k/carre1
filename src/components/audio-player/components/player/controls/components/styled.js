import styled from 'styled-components';
import {space, layout, color, flexbox} from 'styled-system';

const ControlsButton = styled('button')(
  {
    width: '40px',
    height: '40px',
    border: 'none',
    backgroundColor: 'white',
  },
  space,
  layout,
  color,
  flexbox
);
export default ControlsButton;
