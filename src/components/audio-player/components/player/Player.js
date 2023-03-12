import PropTypes from 'prop-types';
import {Box, Text} from '../../../../shared';
import Controls from './controls/Controls';

export default function Player({
  loading, 
  tracks, 
  activeTrack, 
  onChange, 
  isPlaying,
  isOpenTrackList,
  toggleTrackListView}) {

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
        loading={loading}
        isOpenTrackList={isOpenTrackList}
        toggleTrackListView={toggleTrackListView} />
    </Box>
  );
}

Player.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object),
  activeTrack: PropTypes.shape({
    title: PropTypes.string,
  }),
  onChange: PropTypes.func,
  isOpenTrackList: PropTypes.bool,
  toggleTrackListView: PropTypes.func,
  isPlaying: PropTypes.bool,
  loading: PropTypes.bool,
};
