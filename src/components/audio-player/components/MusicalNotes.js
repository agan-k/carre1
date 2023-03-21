import PropTypes from 'prop-types';
import {MusicalNotesWrapper} from "./styled";

const MusicalNotes = ({size, visibility}) => {
  return (
    <MusicalNotesWrapper 
      fontSize={size} 
      visibility={visibility}>
        &#9836;
    </MusicalNotesWrapper>
  );
};
export default MusicalNotes;

MusicalNotes.propTypes = {
  size: PropTypes.string,
  visibility: PropTypes.string,
};
