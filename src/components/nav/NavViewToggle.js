import PropTypes from 'prop-types';
import {NavViewControl} from "./styled";

export default function NavViewToggle(
  {
    isOpenTrackList, 
    toggleTrackListView,
    isOpenNav,
    toggleNavView,
  }) {
  const buttonName = isOpenNav ? 'CLOSE MENU' : 'MENU';
  const handleClick = () => {
    isOpenTrackList && toggleTrackListView();
    toggleNavView();
  };
  return(
    <NavViewControl isOpenNav={isOpenNav} onClick={() => handleClick()}>
      {buttonName}
    </NavViewControl>
  );
}

NavViewToggle.propTypes = {
  isOpenTrackList: PropTypes.bool,
  toggleTrackListView: PropTypes.func,
  isOpenNav: PropTypes.bool,
  toggleNavView: PropTypes.func,
};
