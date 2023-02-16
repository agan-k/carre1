import PropTypes from 'prop-types';
import {Box} from '~src/shared';

export default function Player({
  loading,
  tracks,
  activeTrack,
  onChange,
  isPlaying,
}) {
  return (
    <Box>
      <Box>
        {activeTrack?.title}
      </Box>
    </Box>
  );
}

Player.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object),
  activeTrack: PropTypes.shape({
    title: PropTypes.string,
  }),
  onChange: PropTypes.func,
  isPlaying: PropTypes.bool,
};
