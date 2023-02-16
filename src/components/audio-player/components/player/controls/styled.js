import styled from 'styled-components';
import {Box} from "~src/shared";

const Container = styled(Box)({
  display: 'flex',
  boxSizing: 'border-box',
  border: 'none',
  justifyContent: 'space-around',
  width: '200px',
  margin: '0 auto',
});

export default Container;
