import PropTypes from 'prop-types';
import {TrackButton, TrackWrapper} from './styled';

export default function Track({activeTrack, onChange, track}) {
  let active = Boolean(track.id === activeTrack?.id);
   
  return (
    <TrackWrapper>
      <TrackButton
        active={active}
        onClick={!active ? () => onChange({track, playing: true}) : null}>
        {track.title}
      </TrackButton>
    </TrackWrapper>
  );
}

Track.propTypes = {
  onChange: PropTypes.func,
  activeTrack: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
  }),
  track: PropTypes.shape({
    trackNumber: PropTypes.number,
    title: PropTypes.string,
    id: PropTypes.string,
  }),
};
