import {MISSING_TRACK_TITLE} from '../../../../../../pages/constants';

export const findPreviousTrack = ({tracks, activeTrack}) => {
  const lastTrack = tracks[tracks.length - 1];
  const previousTrack = tracks.find(t => 
    t.trackNumber === activeTrack.trackNumber - 1) || lastTrack;
  const skipMissingTrack = tracks.find(t => 
    t.trackNumber === activeTrack.trackNumber - 2
  );
  const skipMissingLastTrack = tracks[tracks.length - 2];
  const isMissingLastTrack = 
      Boolean(lastTrack.title === MISSING_TRACK_TITLE);
  const isMissingPreviousTrack = 
      Boolean(previousTrack.title === MISSING_TRACK_TITLE);
  const isFirstTrack = Boolean(activeTrack.trackNumber === 1);
  if (isFirstTrack) {
    if (isMissingLastTrack) {
      return skipMissingLastTrack;
    }
    return lastTrack;
  }
  if (isMissingPreviousTrack) {
    return skipMissingTrack;
  }
  return previousTrack;
};
export const findNextTrack = ({tracks, activeTrack}) => {
  const firstTrack = tracks[0];
  const nextTrack = tracks.find(t => 
    t.trackNumber === activeTrack.trackNumber + 1) || firstTrack;
  const skipMissingTrack = tracks.find(t => 
    t.trackNumber === activeTrack.trackNumber + 2
  );
  const skipMissingFirstTrack = tracks[1];
  const isMissingFirstTrack = 
      Boolean(firstTrack.title === MISSING_TRACK_TITLE);
  const isMissingNextTrack = 
      Boolean(nextTrack.title === MISSING_TRACK_TITLE);
  const isLastTrack = Boolean(activeTrack.trackNumber === tracks.length + 1);
  if (isLastTrack) {
    if (isMissingFirstTrack) {
      return skipMissingFirstTrack;
    }
    return firstTrack;
  }
  if (isMissingNextTrack) {
    return skipMissingTrack;
  }
  return nextTrack;
};
