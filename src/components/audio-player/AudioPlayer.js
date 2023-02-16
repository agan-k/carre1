import {useState, useEffect} from 'react';
import audioPlayerData from 'assets/content/audioPlayerData';

export default function AudioPlayer() {
  const tracksData = audioPlayerData;
  const [isPlaying, setIsPlaying] = useState();
  const [activeTrack, setActiveTrack] = useState();

  const onChange = ({track = activeTrack, playing}) => {
    setActiveTrack(track);
    setIsPlaying(playing);
  };

  useEffect(() => {
    if(isPlaying) activeTrack.audio.play();
    if(!isPlaying) activeTrack.audio.pause();
  }, [isPlaying, activeTrack]);

  return (
    
  )
}
