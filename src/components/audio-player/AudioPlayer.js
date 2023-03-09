import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import {Box} from '../../shared';
import {Player, TrackList} from './components';
import {controlAudio} from './components/utils';
import {AudioPlayerWrapper} from './styled';

export default function AudioPlayer({defaultTrack, tracksData}) {
  const [isPlaying, setIsPlaying] = useState();
  const [activeTrack, setActiveTrack] = useState(defaultTrack);

  const onChange = ({track = activeTrack, playing}) => {
    controlAudio({track, activeTrack});
    setActiveTrack(track);
    setIsPlaying(playing);
  };
  
  useEffect(() => {
    if(isPlaying) activeTrack.audio.play();
    if(!isPlaying) activeTrack.audio.pause();
  }, [isPlaying, activeTrack]);

  return (
    <AudioPlayerWrapper p={2}>
      {activeTrack && (
        <Player 
          tracks={tracksData}
          activeTrack={activeTrack}
          onChange={onChange}
          isPlaying={isPlaying}/>
      )}
      {tracksData && (
        <TrackList
          activeTrack={activeTrack} 
          tracks={tracksData}
          onChange={onChange} />
      )}
    </AudioPlayerWrapper>
  );
}

AudioPlayer.propTypes = {
  defaultTrack: PropTypes.object,
  tracksData: PropTypes.arrayOf(Object),
};
