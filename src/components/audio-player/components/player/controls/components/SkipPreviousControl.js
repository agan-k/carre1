import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {findPreviousTrack} from './utils';
import ControlsButton from './styled';

export default function SkipPrevious({tracks, activeTrack, onChange}) {
  const [previousTrack, setPreviousTrack] = useState({});

  useEffect(() => {
    setPreviousTrack(findPreviousTrack({tracks, activeTrack}));
  }, [activeTrack]);

  return (
    <ControlsButton
      onClick={() => onChange({track: previousTrack, playing: true})}>
      {'<<'}
    </ControlsButton>
  );
}

SkipPrevious.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object),
  activeTrack: PropTypes.shape({
    trackNumber: PropTypes.number,
  }),
  onChange: PropTypes.func,
};
