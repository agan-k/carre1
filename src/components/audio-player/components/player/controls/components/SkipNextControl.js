import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {findNextTrack} from './utils';
import ControlsButton from './styled';

export default function SkipNext({tracks, activeTrack, onChange}) {
  const [nextTrack, setNextTrack] = useState({});
    
  useEffect(() => {
    setNextTrack(findNextTrack({tracks, activeTrack}));
  }, [activeTrack]);
  
  return (
    <ControlsButton
      px={1}
      onClick={() => onChange({track: nextTrack, playing: true})}>
      {'>>'}
    </ControlsButton>
  );
}

SkipNext.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object),
  activeTrack: PropTypes.object,
  onChange:PropTypes.func,
};
