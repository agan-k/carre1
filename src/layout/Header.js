import PropTypes from 'prop-types';
import Box from "../shared/Box";

export default function Header({children}) {
  return(
    <Box p={2} m={1}>
      {children}
    </Box>
  );
}

Header.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
};