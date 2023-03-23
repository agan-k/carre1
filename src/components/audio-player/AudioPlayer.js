import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import {Player, TrackList} from './components';
import {controlAudio} from './components/utils';
import {AudioPlayerContainer} from './styled';
import {Box} from '../../shared';

export default function AudioPlayer(
  {
    defaultTrack, 
    tracksData, 
    isOpenNav, 
    toggleNavView,
    isOpenTrackList,
    toggleTrackListView,
  }) {
  const [isPlaying, setIsPlaying] = useState();
  const [activeTrack, setActiveTrack] = useState(defaultTrack);

  const onChange = ({track = activeTrack, playing}) => {
    controlAudio({track, activeTrack});
    setActiveTrack(track);
    setIsPlaying(playing);
    if(isOpenTrackList && playing) toggleTrackListView();
  };
  
  useEffect(() => {
    if(isPlaying) activeTrack.audio.play();
    if(!isPlaying) activeTrack.audio.pause();
  }, [isPlaying, activeTrack, isOpenTrackList]);

  return (
    <AudioPlayerContainer isOpenTrackList={isOpenTrackList}>
      {activeTrack && (
        <Box border={'1px solid black'}>
          <Player 
            tracks={tracksData}
            activeTrack={activeTrack}
            onChange={onChange}
            isPlaying={isPlaying}
            isOpenTrackList={isOpenTrackList}
            toggleTrackListView={toggleTrackListView}
            isOpenNav={isOpenNav}
            toggleNavView={toggleNavView}
          />
        </Box>
      )}
      {tracksData && (
        <TrackList
          isPlaying={isPlaying}
          activeTrack={activeTrack} 
          tracks={tracksData}
          onChange={onChange} 
          isOpenTrackList={isOpenTrackList}
          toggleTrackListView={toggleTrackListView}
          isOpenNav={isOpenNav}
          toggleNavView={toggleNavView}
        />
      )}
    </AudioPlayerContainer>
  );
}

AudioPlayer.propTypes = {
  defaultTrack: PropTypes.object,
  tracksData: PropTypes.arrayOf(Object),
  isOpenNav: PropTypes.bool,
  toggleNavView: PropTypes.func,
  isOpenTrackList: PropTypes.bool,
  toggleTrackListView: PropTypes.func,
};
