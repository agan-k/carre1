import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {findPreviousTrack} from './utils';
import {Button} from '../../../../../../shared';

export default function SkipPrevious({tracks, activeTrack, onChange}) {
  const [previousTrack, setPreviousTrack] = useState({});

  useEffect(() => {
    setPreviousTrack(findPreviousTrack({tracks, activeTrack}));
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
