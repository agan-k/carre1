import PropTypes from 'prop-types';
import {Button, Box} from '../../../../shared';

export default function Track({activeTrack, onChange, track}) {
  let active = Boolean(track.id === activeTrack?.id);
   
  return (
    <Box textAlign={'right'}>
      <Button 
        width={'200px'}
        p={4}
        color={!active ? 'black' : 'primary'}
        border={'none'}
        borderTop={'1px solid #efefef'}
        backgroundColor={'white'}
        borderLeft={'1px solid #efefef'}
        textAlign={'left'}
        onClick={!active ? () => onChange({track, playing: true}) : null}>
        {track.title}
      </Button>
    </Box>
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
