import PropTypes from 'prop-types';
import {Box} from '../../../../shared';
import Track from '../track';

export default function TrackList({activeTrack, tracks, onChange}) {
  const allTitles = tracks.map((item) => (
    <Track 
      activeTrack={activeTrack}
      track={item}
      key={item.id}
      onChange={onChange}/>
  ));

  return (
    <Box>{allTitles}</Box>
  );
}

TrackList.propTypes = {
  activeTrack: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
  }),
  tracks: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
};
