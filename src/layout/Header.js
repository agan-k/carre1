import PropTypes from 'prop-types';
import Box from "../shared/Box";

export default function Header({children}) {
  return(
    <Box>
      {children}
    </Box>
  );
}

Header.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
};
