import PropTypes from 'prop-types';
import Container from './styled';
import {Play, Pause, SkipNext, SkipPrevious} from './components';

export default function Controls({
  loading,
  tracks,
  activeTrack, 
  onChange, 
  isPlaying}) {
  return (
    <Container>
      <SkipPrevious
        tracks={tracks}
        activeTrack={activeTrack}
        onChange={onChange} />
      {
        isPlaying ? 
          (
            <Pause
              onChange={onChange}
              isPlaying={isPlaying}
              loading={loading} />
          ) :
          (
            <Play
              onChange={onChange}
              isPlaying={isPlaying} />
          )
      }
      <SkipNext
        tracks={tracks}
        activeTrack={activeTrack}
        onChange={onChange} />
    </Container>
  );
}

Controls.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object),
  activeTrack: PropTypes.object,
  onChange: PropTypes.func,
  isPlaying: PropTypes.bool,
  loading: PropTypes.bool,
};
