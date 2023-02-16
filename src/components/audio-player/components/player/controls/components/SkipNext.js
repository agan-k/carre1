import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Button} from '~src/shared';

export default function SkipNext({tracks, activeTrack, onChange}) {
  const tracksData = tracks;
  const [nextTrack, setNextTrack] = useState({});

  function findNextTrack() {
    if (activeTrack.trackNumber === tracksData.length) {
      return tracksData[0];
    }
    return tracksData.find(t => 
      t.trackNumber === activeTrack.trackNumber + 1);
  }
    
  useEffect(() => {
    setNextTrack(findNextTrack());
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
