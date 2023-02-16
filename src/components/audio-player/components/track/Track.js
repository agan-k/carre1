import PropTypes from 'prop-types';
import {Button} from '~src/shared';

export default function Track({activeTrack, onChange, track}) {
  let active = Boolean(track.id === activeTrack?.id);
   
  return (
    !active ? 
      <Button 
        width={1}
        m={1}
        textAlign="left"
        onClick={() => onChange({track, playing: true})}>
        {track.title}
      </Button>
      : 
      <Button 
        width={1}
        m={1}
        color='primary'
        textAlign="left">
        {track.title}
      </Button>
  );
}

Track.propTypes = {
  onChange: PropTypes.func,
  activeTrack: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
  }),
  track: PropTypes.shape({
    trackNumber: PropTypes.number,
    title: PropTypes.string,
    id: PropTypes.number,
  }),
};
