import PropTypes from 'prop-types';
import {Text} from '../../../../../shared';
import {CurrentTrackWrapper} from './styled';

export default function CurrentTrack(
  {
    // isOpenTrackList,
    loading,
    activeTrack,
    toggleTrackListView,
    isOpenNav,
    toggleNavView,
  }) {
  const currentTrack = activeTrack?.title;
  const handleClick = () => {
    isOpenNav && toggleNavView();
    toggleTrackListView();
  };

  return (
    <CurrentTrackWrapper>
      {loading ? (
        <Text>loading...</Text>
      ) : (
        <Text onClick={() => handleClick()}>&#39;{currentTrack}&#39;</Text>
      )}
    </CurrentTrackWrapper>
  );
}

CurrentTrack.propTypes = {
  loading: PropTypes.bool,
  activeTrack: PropTypes.shape({
    title: PropTypes.string,
  }),
  isOpenTrackList: PropTypes.bool,
  toggleTrackListView: PropTypes.func,
  isOpenNav: PropTypes.bool,
  toggleNavView: PropTypes.func,
};
