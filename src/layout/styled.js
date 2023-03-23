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
    display: ['block', 'block', 'flex'],
    flexDirection: [
      'unset',
      'unset',
      hasAudioPlayer ? 
        'row-reverse' : 'initial',//keeps Nav to the left if no data
    ],
    borderBottom: ['none', `1px solid ${theme.colors.primary}`],
    marginBottom: ['none', theme.space[1]]
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
