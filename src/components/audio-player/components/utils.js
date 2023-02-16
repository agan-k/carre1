export const defaultTrack = (data) => data[0];

export const controlAudio = ({track, activeTrack}) => {
  if(track.id !== activeTrack.id) track.audio.currentTime = 0;
  activeTrack.audio.pause();
};
