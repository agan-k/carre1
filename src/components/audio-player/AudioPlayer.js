import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import {Player, TrackList, TrackListViewControl} from './components';
import {controlAudio} from './components/utils';
import {AudioPlayerWrapper} from './styled';

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
    <AudioPlayerWrapper isOpenTrackList={isOpenTrackList}>
      {activeTrack && (
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
      )}
      {tracksData && (
        <TrackList
          activeTrack={activeTrack} 
          tracks={tracksData}
          onChange={onChange} 
          isOpenTrackList={isOpenTrackList}
          toggleTrackListView={toggleTrackListView}
          isOpenNav={isOpenNav}
          toggleNavView={toggleNavView}
        />
      )}
      <TrackListViewControl 
        isOpenTrackList={isOpenTrackList}
        toggleTrackListView={toggleTrackListView}
        isOpenNav={isOpenNav}
        toggleNavView={toggleNavView}
      />
    </AudioPlayerWrapper>
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
