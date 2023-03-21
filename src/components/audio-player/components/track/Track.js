import PropTypes from 'prop-types';
import {TrackButton, TrackWrapper} from './styled';
import MusicalNotes from '../MusicalNotes';
import {Text} from '../../../../shared';

export default function Track({isPlaying, activeTrack, onChange, track}) {
  const active = Boolean(track.id === activeTrack?.id);
  const trackTitle = track?.title;
   
  return (
    <TrackWrapper>
      <TrackButton
        active={active}
        onClick={!active ? () => onChange({track, playing: true}) : null}>
        <MusicalNotes 
          size={'10px'} 
          visibility={isPlaying && active ? 'visible' : 'hidden'}
        />
        <Text pl={3}>&#39;{trackTitle}&#39;</Text>
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
