import styled from 'styled-components';
import {color, space, layout, typography, border} from 'styled-system';

const Button = styled('button')(
  {
    border: 'none',
  },
  color, space, layout, typography, border);

export default Button;
