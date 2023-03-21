import PropTypes from 'prop-types';
import {
  PlayControl, 
  PauseControl, 
  SkipNextControl, 
  SkipPreviousControl,
  TrackListViewControl
} from './components';
import {ControlsContainer} from './styled';

export default function Controls(
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
    <ControlsContainer>
      <SkipPreviousControl
        tracks={tracks}
        activeTrack={activeTrack}
        onChange={onChange} />
      {
        isPlaying ? 
          (
            <PauseControl
              onChange={onChange}
              isPlaying={isPlaying}
              loading={loading} />
          ) :
          (
            <PlayControl
              onChange={onChange}
              isPlaying={isPlaying} />
          )
      }
      <SkipNextControl
        tracks={tracks}
        activeTrack={activeTrack}
        onChange={onChange} />
      <TrackListViewControl 
        isOpenTrackList={isOpenTrackList}
        toggleTrackListView={toggleTrackListView}
        isOpenNav={isOpenNav}
        toggleNavView={toggleNavView}
      />
    </ControlsContainer>
  );
}

Controls.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object),
  activeTrack: PropTypes.object,
  toggleTrackListView: PropTypes.func,
  isOpenTrackList: PropTypes.bool,
  toggleNavView: PropTypes.func,
  isOpenNav: PropTypes.bool,
  onChange: PropTypes.func,
  isPlaying: PropTypes.bool,
  loading: PropTypes.bool,
};
