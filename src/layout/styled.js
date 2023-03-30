import styled from 'styled-components';
import {Box} from '../shared';
import {theme} from '../theme';
import mediaQuery from '../utils/mediaQuery';

export const HeaderContainer = styled(Box)(
  {
    justifyContent: 'space-between',
    backgroundColor: theme.colors.headerBackground,
  },
  mediaQuery({
    marginBottom: ['none', 'none', '2px', '2px'],
    marginLeft: ['none', 'none', theme.space[3]],
    marginRight: ['none', 'none', theme.space[3]],
    borderBottom: 
      [
        'none',
        `1px solid ${theme.colors.primary}`,
      ],
    display: ['block', 'block', 'flex', 'flex'],
    flexDirection: [
      'unset',
      'unset',
      'column-reverse',
      'row-reverse',
    ],
  })
);
export const FooterWrapper = styled(Box)(
  {
    fontSize: theme.fontSizes[0],
    textAlign: 'center',
    borderTop: `1px solid ${theme.colors.primaryMuted}`,
    margin: theme.space[4],
    padding: theme.space[5],
    color: theme.colors.lightGray,
  }
);
