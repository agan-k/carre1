import PropTypes from 'prop-types';
import {Box, Text} from '../../../../shared';
import Controls from './controls/Controls';

export default function Player(
  {
    loading, 
    tracks, 
    activeTrack, 
    onChange, 
    isPlaying,
    isOpenTrackList,
    toggleTrackListView,
    isOpenNav,
    toggleNavView,
  }) {
  const currentTrack = activeTrack?.title;
  return (
    <Box display={'flex'} justifyContent={'space-between'}>
      <Box pl={3} display={'flex'} alignSelf={'center'}>
        {loading ? (
          <Text pl={6}>. . .</Text>
        ) : (
          <Text color='primary' fontSize={1} fontStyle={'italic'}>
            &#39;{currentTrack}&#39;
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
        toggleTrackListView={toggleTrackListView}
        isOpenNav={isOpenNav}
        toggleNavView={toggleNavView}
      />
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
  isOpenNav: PropTypes.bool,
  toggleNavView: PropTypes.func,
  isPlaying: PropTypes.bool,
  loading: PropTypes.bool,
};
