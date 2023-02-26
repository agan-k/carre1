import PropTypes from 'prop-types';
import {Box, Text} from '../../../../shared';
import Controls from './controls/Controls';

export default function Player({
  loading, 
  tracks, 
  activeTrack, 
  onChange, 
  isPlaying,
}) {

  return (
    <Box mb={2}>
      <Box m={2}>
        {loading ? (
          <Text pl={6}>. . .</Text>
        ) : (
          <Text textAlign="center" color='primary'>
            {activeTrack.title}
          </Text>
        )}
      </Box>
      <Controls 
        tracks={tracks}
        activeTrack={activeTrack}
        onChange={onChange}
        isPlaying={isPlaying}
        loading={loading} />
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
  loading: PropTypes.bool,
};
