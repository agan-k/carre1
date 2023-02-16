import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Button} from '~src/shared';

export default function SkipPrevious({tracks, activeTrack, onChange}) {
  const [previousTrack, setPreviousTrack] = useState({});

  function findPreviousTrack() {
    if (activeTrack.trackNumber === 1) {
      return tracks[tracks.length - 1];
    }
    return tracks.find(t => 
      t.trackNumber === activeTrack.trackNumber - 1
    );
  }

  useEffect(() => {
    setPreviousTrack(findPreviousTrack());
  }, [activeTrack]);

  return (
    <Button 
      p={2}
      lineHeight={1}
      onClick={() => onChange({track: previousTrack, playing: true})}>
      {'<<'}
    </Button>
  );
}

SkipPrevious.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object),
  activeTrack: PropTypes.shape({
    trackNumber: PropTypes.number,
  }),
  onChange: PropTypes.func,
};
