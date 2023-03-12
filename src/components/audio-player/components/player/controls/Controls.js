import PropTypes from 'prop-types';
import Container from './styled';
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
    <Container>
      <Container>
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
      </Container>
      <TrackListViewControl 
        isOpenTrackList={isOpenTrackList}
        toggleTrackListView={toggleTrackListView} />
    </Container>
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
