import PropTypes from 'prop-types';
import {Button} from '../../..../../shared';

export default function LanguageSelector({language, onChange}) {
  const isFrench = Boolean(language === 'french');
  const buttonName = isFrench ? 'English' : 'Française';
  const changeTo = isFrench ? 'english' : 'french';

  return (
    <Button 
      p={3}
      border={'none'}
      textAlign={'right'}
      backgroundColor={'gray'}
      onClick={() => onChange(`${changeTo}`)}> 
      &#127760; {buttonName}
    </Button>
  );
}

LanguageSelector.propTypes = {
  language: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
