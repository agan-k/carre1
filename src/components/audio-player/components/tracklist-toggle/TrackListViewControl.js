import PropTypes from 'prop-types';
import {Button} from '../../../../shared';

export default function TrackListViewControl(
  {
    isOpenTrackList, 
    toggleTrackListView,
    isOpenNav,
    toggleNavView,
  }) {
  const buttonName = isOpenTrackList ? 'Close Track list' : 'Track list';
  const handleClick = () => {
    isOpenNav && toggleNavView();
    toggleTrackListView();
  };

  return (
    <Button 
      width={'100%'}
      p={4}
      onClick={() => handleClick()}>{`${buttonName}`}
    </Button>
  );
}

TrackListViewControl.propTypes = {
  isOpenTrackList: PropTypes.bool,
  toggleTrackListView: PropTypes.func,
  isOpenNav: PropTypes.bool,
  toggleNavView: PropTypes.func,
};
