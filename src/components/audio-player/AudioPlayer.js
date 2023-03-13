import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import {Player, TrackList} from './components';
import {controlAudio} from './components/utils';
import {AudioPlayerWrapper} from './styled';

export default function AudioPlayer({defaultTrack, tracksData}) {
  const [isOpenTrackList, setIsOpenTrackList] = useState(false);
  const [isPlaying, setIsPlaying] = useState();
  const [activeTrack, setActiveTrack] = useState(defaultTrack);

  const onChange = ({track = activeTrack, playing}) => {
    controlAudio({track, activeTrack});
    setActiveTrack(track);
    setIsPlaying(playing);
    if(isOpenTrackList && playing) setIsOpenTrackList(false);
  };

  const toggleTrackListView = () => {
    setIsOpenTrackList(!isOpenTrackList);
  };
  
  useEffect(() => {
    if(isPlaying) activeTrack.audio.play();
    if(!isPlaying) activeTrack.audio.pause();
  }, [isPlaying, activeTrack, isOpenTrackList]);

  return (
    <AudioPlayerWrapper p={2} pt={0} isOpenTrackList={isOpenTrackList}>
      {activeTrack && (
        <Player 
          tracks={tracksData}
          activeTrack={activeTrack}
          onChange={onChange}
          isPlaying={isPlaying}
          isOpenTrackList={isOpenTrackList}
          toggleTrackListView={toggleTrackListView}
        />
      )}
      {tracksData && (
        <TrackList
          activeTrack={activeTrack} 
          tracks={tracksData}
          onChange={onChange} 
          isOpenTrackList={isOpenTrackList}
        />
      )}
    </AudioPlayerWrapper>
  );
}

AudioPlayer.propTypes = {
  defaultTrack: PropTypes.object,
  tracksData: PropTypes.arrayOf(Object),
};
