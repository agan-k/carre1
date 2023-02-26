import PropTypes from 'prop-types';
import {Button} from '../../../../../../shared';

export default function Play({onChange}) {

  return (
    <Button lineHeight={1} p={2} onClick={() => onChange({playing: true})}>
      {'>'}
    </Button>
  );
}

Play.propTypes = {
  onChange: PropTypes.func,
};
