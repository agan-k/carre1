import PropTypes from 'prop-types';
import {Button} from '../../../../../../shared';

export default function TrackListViewControl(
  {
    isOpenTrackList, 
    toggleTrackListView,
  }) {
  const toggle = isOpenTrackList ? <>&#x2715;</> : <>&#9776;</>;

  return <Button onClick={() => toggleTrackListView()}>{toggle}</Button>;
}

TrackListViewControl.propTypes = {
  isOpenTrackList: PropTypes.bool,
  toggleTrackListView: PropTypes.func,
};
