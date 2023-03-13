import PropTypes from 'prop-types';
import {Box} from '../../../../../shared';
import {
  PlayControl, 
  PauseControl, 
  SkipNextControl, 
  SkipPreviousControl
} from './components';

export default function Controls(
  {
    loading,
    tracks,
    activeTrack,
    onChange,
    isPlaying,
  }) {
  
  return (
    <Box justifyContent={'space-around'} display={'flex'} width={'120px'}>
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
    </Box>
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
