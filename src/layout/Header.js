import PropTypes from 'prop-types';
import {Nav, AudioPlayer} from "../components";
import {HeaderContainer} from './styled';
import {Box} from '../shared';

export default function Header(
  {
    language,
    tracksData,
    onChange,
    toggleNavView,
    toggleTrackListView,
    isOpenTrackList,
    isOpenNav,
  }) {

  return(
    <HeaderContainer tracksData={tracksData}>
      {tracksData && (
        <Box display={'flex'} justifyContent={'end'}>
          <AudioPlayer
            tracksData={tracksData} 
            isOpenNav={isOpenNav}
            toggleNavView={toggleNavView}
            isOpenTrackList={isOpenTrackList}
            toggleTrackListView={toggleTrackListView}
          />
        </Box>
      )}
      <Nav
        language={language}
        onChange={onChange}
        isOpenNav={isOpenNav}
        toggleNavView={toggleNavView}
        isOpenTrackList={isOpenTrackList}
        toggleTrackListView={toggleTrackListView}
      />
    </HeaderContainer>
  );
}

Header.propTypes = {
  language: PropTypes.string,
  siteDomain: PropTypes.string,
  tracksData: PropTypes.arrayOf(Object),
  isOpenNav: PropTypes.bool,
  onChange: PropTypes.func,
  toggleNavView: PropTypes.func,
  isOpenTrackList: PropTypes.bool,
  toggleTrackListView: PropTypes.func,
};
