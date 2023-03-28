import PropTypes from 'prop-types';
import {PlayerContainer} from './styled';
import {BlackBorder, Flex} from '../../../../shared';
import {Controls} from './controls';
import {CurrentTrack} from './current-track';
import MusicalNotes from '../MusicalNotes';

export default function Player(
  {
    loading, 
    tracks, 
    activeTrack, 
    onChange, 
    isPlaying,
    isOpenTrackList,
    toggleTrackListView,
    isOpenNav,
    toggleNavView,
  }) {

  return (
    <BlackBorder>
      <PlayerContainer>
        <Flex pl={2}>
          <MusicalNotes
            size={'10px'} 
            visibility={isPlaying ? 'visible' : 'hidden'}
          />
          <CurrentTrack
            loading={loading}
            activeTrack={activeTrack}
            isOpenTrackList={isOpenTrackList}
            toggleTrackListView={toggleTrackListView}
            isOpenNav={isOpenNav}
            toggleNavView={toggleNavView}
          />
        </Flex>
        <Controls 
          tracks={tracks}
          activeTrack={activeTrack}
          onChange={onChange}
          isPlaying={isPlaying}
          loading={loading}
          isOpenTrackList={isOpenTrackList}
          toggleTrackListView={toggleTrackListView}
          isOpenNav={isOpenNav}
          toggleNavView={toggleNavView}
        />
      </PlayerContainer>
    </BlackBorder>
  );
}

Player.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object),
  activeTrack: PropTypes.shape({
    title: PropTypes.string,
  }),
  onChange: PropTypes.func,
  isOpenTrackList: PropTypes.bool,
  toggleTrackListView: PropTypes.func,
  isOpenNav: PropTypes.bool,
  toggleNavView: PropTypes.func,
  isPlaying: PropTypes.bool,
  loading: PropTypes.bool,
};
