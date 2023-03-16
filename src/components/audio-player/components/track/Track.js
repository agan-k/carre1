import PropTypes from 'prop-types';
import {TrackButton, TrackWrapper} from './styled';
import MusicalNotes from '../MusicalNotes';

export default function Track({isPlaying, activeTrack, onChange, track}) {
  const active = Boolean(track.id === activeTrack?.id);
  const trackTitle = 
  <>
    <>&#39;</>{track?.title}<>&#39;</>
  </>;
   
  return (
    <TrackWrapper>
      <TrackButton
        active={active}
        onClick={!active ? () => onChange({track, playing: true}) : null}>
        {trackTitle}
        {isPlaying && active && <MusicalNotes size={'10px'} />}
      </TrackButton>
    </TrackWrapper>
  );
}

Track.propTypes = {
  isPlaying: PropTypes.bool,
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
