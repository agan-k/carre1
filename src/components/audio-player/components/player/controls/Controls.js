import PropTypes from 'prop-types';
import {Box} from '../../../../../shared';
import ControlsContainer from './styled';
import {
  PlayControl, 
  PauseControl, 
  SkipNextControl, 
  SkipPreviousControl,
  TrackListViewControl
} from './components';

export default function Controls({
  loading,
  tracks,
  activeTrack, 
  onChange, 
  isPlaying,
  toggleTrackListView,
  isOpenTrackList}) {
  
  return (
    <ControlsContainer
      display={'flex'} 
      justifyContent={'center'}>
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
      <Box dalignSelf={'flex-end'}>
        <TrackListViewControl 
          isOpenTrackList={isOpenTrackList}
          toggleTrackListView={toggleTrackListView} />
      </Box>
    </ControlsContainer>
  );
}

Controls.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object),
  activeTrack: PropTypes.object,
  toggleTrackListView: PropTypes.func,
  isOpenTrackList: PropTypes.bool,
  onChange: PropTypes.func,
  isPlaying: PropTypes.bool,
  loading: PropTypes.bool,
};
