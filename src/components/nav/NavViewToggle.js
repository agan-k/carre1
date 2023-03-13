import PropTypes from 'prop-types';
import {NavViewControl} from "./styled";
import {Box} from '../../shared';

export default function NavViewToggle({isNavOpen, toggle}) {
  return(
    <Box>
      {
        isNavOpen ? 
          <NavViewControl 
            p={4}
            onClick={() => toggle()}>
            Close Menu
          </NavViewControl> :
          <NavViewControl
            p={4}
            onClick={() => toggle()}>
            Menu
          </NavViewControl>
      }
    </Box>
  );
}

NavViewToggle.propTypes = {
  isNavOpen: PropTypes.bool,
  toggle: PropTypes.func,
};
