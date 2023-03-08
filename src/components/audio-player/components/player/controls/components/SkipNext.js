import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {findNextTrack} from './utils';
import {Button} from '../../../../../../shared';

export default function SkipNext({tracks, activeTrack, onChange}) {
  const [nextTrack, setNextTrack] = useState({});
    
  useEffect(() => {
    setNextTrack(findNextTrack({tracks, activeTrack}));
  }, [activeTrack]);
  
  return (
    <Button
      p={2}
      lineHeight={1}
      onClick={() => onChange({track: nextTrack, playing: true})}>
      {'>>'}
    </Button>
  );
}

SkipNext.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object),
  activeTrack: PropTypes.object,
  onChange:PropTypes.func,
};
