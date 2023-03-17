import styled from 'styled-components';
import {space, layout, color} from 'styled-system';
import {theme} from '../theme';

export const HeaderWrapper = styled.div(
  {
    margin: '0 auto',
    top: '0',
    height: 'auto',
    width: '100%',
    backgroundColor: 'black',
  },
  space,
  layout,
  color
);
export const FooterWrapper = styled.div(
  {
    fontSize: theme.fontSizes[0],
    textAlign: 'center',
    borderTop: '1px solid gray',
    padding: theme.space[5],
    margin: theme.space[4],
    color: theme.colors.lightGray,
  },
  space,
  layout,
  color
);
