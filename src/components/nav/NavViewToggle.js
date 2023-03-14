import PropTypes from 'prop-types';
import {NavViewControl} from "./styled";
import {Box} from '../../shared';

export default function NavViewToggle(
  {
    isOpenTrackList, 
    toggleTrackListView,
    isOpenNav,
    toggleNavView,
  }) {
  const buttonName = isOpenNav ? 'Close Menu' : 'Menu';
  const handleClick = () => {
    isOpenTrackList && toggleTrackListView();
    toggleNavView();
  };
  return(
    <Box>
      <NavViewControl 
        p={4}
        textAlign={'right'}
        onClick={() => handleClick()}>
        {buttonName}
      </NavViewControl>
    </Box>
  );
}

NavViewToggle.propTypes = {
  isOpenTrackList: PropTypes.bool,
  toggleTrackListView: PropTypes.func,
  isOpenNav: PropTypes.bool,
  toggleNavView: PropTypes.func,
};
