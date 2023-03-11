import PropTypes from 'prop-types';
import {Button} from '../../../../../../shared';

export default function Play({onChange}) {

  return (
    <Button lineHeight={0} p={1} onClick={() => onChange({playing: true})}>
      {'>'}
    </Button>
  );
}

Play.propTypes = {
  onChange: PropTypes.func,
};
