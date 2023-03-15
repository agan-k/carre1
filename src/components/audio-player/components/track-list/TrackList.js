import PropTypes from 'prop-types';
import {TracklistWrapper} from './styled';
import Track from '../track';

export default function TrackList(
  {
    isPlaying,
    activeTrack, 
    tracks, 
    onChange,
    isOpenTrackList,
  }) {
  const allTitles = tracks.map((item) => (
    <Track 
      isPlaying={isPlaying}
      activeTrack={activeTrack}
      track={item}
      key={item.id}
      onChange={onChange}/>
  ));

  return (
    <TracklistWrapper isOpenTrackList={isOpenTrackList}>
      {allTitles}
    </TracklistWrapper>
  );
}

TrackList.propTypes = {
  isPlaying: PropTypes.bool,
  activeTrack: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
  }),
  tracks: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
  isOpenTrackList: PropTypes.bool,
};
