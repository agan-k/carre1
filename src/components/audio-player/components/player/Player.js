import PropTypes from 'prop-types';
import {CurrentTrack, PlayerContainer} from './styled';
import {Box, Text} from '../../../../shared';
import Controls from './controls/Controls';
import MusicalNotes from '../MusicalNotes';

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
  const currentTrack = 
    <>
      <>&#39;</>{activeTrack?.title}<>&#39;</>
    </>;
  return (
    <PlayerContainer>
      <Box pl={3} display={'flex'} alignSelf={'center'}>
        {loading ? (
          <Text pl={6}>. . .</Text>
        ) : (
          <CurrentTrack>
            {currentTrack}
          </CurrentTrack>
        )}
      </Box>
      {isPlaying && <MusicalNotes />}
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
    </PlayerContainer>
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
