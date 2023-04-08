export function handleMissingAudioData({audioData, missingTrackTitle}) {
  const audioPlayerData = audioData?.map((item, index) => {
    if(item.title === null || item.file.url === null) {
      return {
        trackNumber: index + 1,
        title: missingTrackTitle,
        id: item.title,
        audio: new Audio(item.file.url),
      };
    } else {
      return {
        trackNumber: index + 1,
        title: item.title,
        id: item.title,
        audio: new Audio(item.file.url),
      };
    }
  });
  return audioPlayerData;
}
