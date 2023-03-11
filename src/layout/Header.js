import PropTypes from 'prop-types';
import {HeaderWrapper} from './styled';

export default function Header({children}) {
  return(
    <HeaderWrapper>
      {children}
    </HeaderWrapper>
  );
}

Header.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
};
