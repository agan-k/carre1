import styled from 'styled-components';
import {Box} from '../shared';
import {theme} from '../theme';
import mediaQuery from '../utils/mediaQuery';

const hasAudioPlayer = 
  Boolean(props => (props.defaultTrack && props.tracksData));

export const HeaderContainer = styled(Box)(
  {
    justifyContent: 'space-between',
    backgroundColor: theme.colors.headerBackground,
  },
  mediaQuery({
    marginBottom: ['none', '2px', '2px'],
    marginLeft: ['none', 'none', theme.space[3]],
    marginRight: ['none', 'none', theme.space[3]],
    borderBottom: 
      [
        'none', 
        `1px solid ${theme.colors.primary}`,
        `1px solid ${theme.colors.primary}`,
      ],
    display: ['block', 'block', 'block', 'flex'],
    flexDirection: [
      'unset',
      'unset',
      hasAudioPlayer ? 
        'row-reverse' : 'initial',//Nav to the right if data returns undefined
    ],
  })
);
export const FooterWrapper = styled(Box)(
  {
    fontSize: theme.fontSizes[0],
    textAlign: 'center',
    borderTop: '1px solid gray',
    padding: theme.space[5],
    margin: theme.space[4],
    color: theme.colors.lightGray,
  }
);
