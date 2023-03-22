import styled from 'styled-components';
import {space, layout, color} from 'styled-system';
import {theme} from '../theme';

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
