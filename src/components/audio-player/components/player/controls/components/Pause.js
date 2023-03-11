import PropTypes from 'prop-types';
import {Button} from '../../../../../../shared';
import Play from './Play';

export default function Pause({loading, onChange}) {
  return (
    <>
      {loading ?
        (
          <Play />
        ) :
        (
          <Button 
            p={0}
            lineHeight={1}
            onClick={() => onChange({playing: false})}>
            {'| |'}
          </Button>
        ) 
    
      }
    </>
  );
}

Pause.propTypes = {
  onChange: PropTypes.func,
  loading: PropTypes.bool,
};
