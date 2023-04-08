import PropTypes from 'prop-types';
import {CurrentTrackWrapper, CurrentTrackText} from './styled';

export default function CurrentTrack(
  {
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
        <CurrentTrackText>loading...</CurrentTrackText>
      ) : (
        <CurrentTrackText cursor={'pointer'} onClick={() => handleClick()}>
          &#39;{currentTrack}&#39;
        </CurrentTrackText>
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
