import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import {Player, TrackList} from './components';
import {controlAudio} from './components/utils';
import {AudioPlayerContainer} from './styled';

export default function AudioPlayer(
  {
    tracksData, 
    isOpenNav, 
    toggleNavView,
    isOpenTrackList,
    toggleTrackListView,
  }) {
  const [isPlaying, setIsPlaying] = useState();
  const [activeTrack, setActiveTrack] = useState(tracksData[0]);

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
  tracksData: PropTypes.arrayOf(Object),
  isOpenNav: PropTypes.bool,
  toggleNavView: PropTypes.func,
  isOpenTrackList: PropTypes.bool,
  toggleTrackListView: PropTypes.func,
};
