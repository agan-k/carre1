import PropTypes from 'prop-types';
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
    <>
      <Box 
        backgroundColor={theme.colors.background} 
        display={'flex'} 
        justifyContent={'space-between'}
        alignItems={'center'}>
      
        <HeadingLarge 
          color={theme.colors.darkRed} 
          fontSize={2} 
          pl={3} 
          fontWeight={'700'}>
          {siteDomain}
        </HeadingLarge>
        <LanguageSelector language={language} onChange={onChange} />
      </Box>
      <Box 
        display={['block', 'block', 'flex']} 
        flexDirection={defaultTrack && tracksData ? 'row-reverse' : 'initial'} 
        justifyContent={'space-between'}>
        
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
        
        <Nav
          language={language} 
          isOpenNav={isOpenNav}
          toggleNavView={toggleNavView}
          isOpenTrackList={isOpenTrackList}
          toggleTrackListView={toggleTrackListView}
        />
      </Box>
    </>
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
