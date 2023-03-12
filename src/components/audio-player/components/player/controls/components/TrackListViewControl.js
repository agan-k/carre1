import PropTypes from 'prop-types';
import ControlsButton from './styled';

export default function TrackListViewControl(
  {
    isOpenTrackList, 
    toggleTrackListView,
  }) {
  const toggle = isOpenTrackList ? <>&#x2715;</> : <>&#9776;</>;

  return (
    <ControlsButton onClick={() => toggleTrackListView()}>
      {toggle}
    </ControlsButton>
  );
}

TrackListViewControl.propTypes = {
  isOpenTrackList: PropTypes.bool,
  toggleTrackListView: PropTypes.func,
};
