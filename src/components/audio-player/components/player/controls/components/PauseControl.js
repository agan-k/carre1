import PropTypes from 'prop-types';
import ControlsButton from './styled';
import Play from './PlayControl';

export default function Pause({loading, onChange}) {
  return (
    <>
      {loading ?
        (
          <Play />
        ) :
        (
          <ControlsButton
            onClick={() => onChange({playing: false})}>
            {'||'}
          </ControlsButton>
        ) 
    
      }
    </>
  );
}

Pause.propTypes = {
  onChange: PropTypes.func,
  loading: PropTypes.bool,
};
