import PropTypes from 'prop-types';
import {MusicalNotesWrapper} from "./styled";

const MusicalNotes = ({size}) => {
  return (
    <MusicalNotesWrapper fontSize={size}>&#9836;</MusicalNotesWrapper>
  );
};
export default MusicalNotes;

MusicalNotes.propTypes = {
  size: PropTypes.string,
};
