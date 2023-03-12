import PropTypes from 'prop-types';
import ControlsButton from './styled';

export default function Play({onChange}) {

  return (
    <ControlsButton
      onClick={() => onChange({playing: true})}>
      {' > '}
    </ControlsButton>
  );
}

Play.propTypes = {
  onChange: PropTypes.func,
};
