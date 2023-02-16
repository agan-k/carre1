import {useState, useEffect} from 'react';
import audioPlayerData from '~src/assets/content/audioPlayerData';

import {Box} from '~src/shared';
import {Player, TrackList} from './components';

export default function AudioPlayer() {
  const tracksData = audioPlayerData;
  const [isPlaying, setIsPlaying] = useState();
  const [activeTrack, setActiveTrack] = useState(audioPlayerData[0]);

  const onChange = ({track = activeTrack, playing}) => {
    setActiveTrack(track);
    setIsPlaying(playing);
  };

  useEffect(() => {
    if(isPlaying) activeTrack.audio.play();
    if(!isPlaying) activeTrack.audio.pause();
  }, [isPlaying, activeTrack]);

  return (
    <Box p={2}>
      <Player 
        tracks={tracksData}
        activeTrack={activeTrack}
        onChange={onChange}
        isPlaying={isPlaying}/>

      <TrackList
        activeTrack={activeTrack} 
        tracks={tracksData}
        onChange={onChange} />
    </Box>
  );
}
