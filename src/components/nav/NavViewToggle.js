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
  const handleClick = () => {
    isOpenTrackList && toggleTrackListView();
    toggleNavView();
  };
  return(
    <Box>
      {
        isOpenNav ? 
          <NavViewControl 
            p={4}
            onClick={() => handleClick()}>
            Close Menu
          </NavViewControl> :
          <NavViewControl
            p={4}
            onClick={() => handleClick()}>
            Menu
          </NavViewControl>
      }
    </Box>
  );
}

NavViewToggle.propTypes = {
  isOpenTrackList: PropTypes.bool,
  toggleTrackListView: PropTypes.func,
  isOpenNav: PropTypes.bool,
  toggleNavView: PropTypes.func,
};
