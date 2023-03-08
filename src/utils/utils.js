import {DEFAULT_TRACK_NUMBER} from "../pages/constants";

export function handleAudioPlayerData({audioData, missingTrackTitle}) {
  const audioPlayerData = audioData?.map((item, index) => {
    if(item.data.track_title === null || item.data.track_link.url === null) {
      return {
        trackNumber: index + 1,
        title: missingTrackTitle,
        id: item.id,
        audio: new Audio(item.data.track_link.url),
        default: item.data.default_track,
      };
    } else {
      return {
        trackNumber: index + 1,
        title: item.data.track_title,
        id: item.id,
        audio: new Audio(item.data.track_link.url),
        default: item.data.default_track,
      };
    }
  });
  return audioPlayerData;
}
export function isDefault(track) {
  const defaultTrack = track.default === true || 
    track.trackNumber === DEFAULT_TRACK_NUMBER;
  return defaultTrack;
};
