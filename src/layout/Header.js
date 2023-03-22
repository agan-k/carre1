import PropTypes from 'prop-types';
import {HeaderWrapper} from './styled';
import {Box, HeadingLarge} from '../shared';
import {Nav, LanguageSelector, AudioPlayer} from "../components";
import {theme} from '../theme';

export default function Header(
  {
    language,
    tracksData,
    defaultTrack,
    siteDomain,
    onChange,
    toggleNavView,
    toggleTrackListView,
    isOpenTrackList,
    isOpenNav,
  }) {

  return(
    <HeaderWrapper>
      <Box 
        backgroundColor={'#EFEFEF'} 
        display={'flex'} 
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <HeadingLarge
          color={'black'}
          fontSize={1} 
          pl={3}
        >
          {siteDomain}
        </HeadingLarge>
        <LanguageSelector language={language} onChange={onChange} />
      </Box>
      <Box 
        display={['block', 'block', 'flex']} 
        flexDirection={'row-reverse'} 
        justifyContent={'flex-end'}>
        <Box 
          flexGrow={'1'}
          height={theme.space[5]}
        >
          {defaultTrack && tracksData && (
            <AudioPlayer
              tracksData={tracksData} 
              defaultTrack={defaultTrack}
              isOpenNav={isOpenNav}
              toggleNavView={toggleNavView}
              isOpenTrackList={isOpenTrackList}
              toggleTrackListView={toggleTrackListView}
            />
          )}
        </Box>
        <Box 
          height={theme.space[5]}
          pr={['0', '4']}>
          <Nav
            language={language} 
            isOpenNav={isOpenNav}
            toggleNavView={toggleNavView}
            isOpenTrackList={isOpenTrackList}
            toggleTrackListView={toggleTrackListView}
          />
        </Box>
      </Box>
    </HeaderWrapper>
  );
}

Header.propTypes = {
  language: PropTypes.string,
  siteDomain: PropTypes.string,
  defaultTrack: PropTypes.object,
  tracksData: PropTypes.arrayOf(Object),
  isOpenNav: PropTypes.bool,
  onChange: PropTypes.func,
  toggleNavView: PropTypes.func,
  isOpenTrackList: PropTypes.bool,
  toggleTrackListView: PropTypes.func,
};
