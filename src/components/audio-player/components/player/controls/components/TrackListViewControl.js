import PropTypes from 'prop-types';
import ControlsButton from './styled';

export default function TrackListViewControl(
  {
    isOpenTrackList, 
    toggleTrackListView,
    isOpenNav,
    toggleNavView,
  }) {
  const toggle = isOpenTrackList ? <>&#x2715;</> : <>&#9776;</>;
  const handleClick = () => {
    isOpenNav && toggleNavView();
    toggleTrackListView();
  };

  return (
    <ControlsButton onClick={() => handleClick()}>
      {toggle}
    </ControlsButton>
  );
}

TrackListViewControl.propTypes = {
  isOpenTrackList: PropTypes.bool,
  toggleTrackListView: PropTypes.func,
  isOpenNav: PropTypes.bool,
  toggleNavView: PropTypes.func,
};
