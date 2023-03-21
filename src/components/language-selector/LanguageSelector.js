import PropTypes from 'prop-types';
import {LanguageSelectorButton} from './styled';

export default function LanguageSelector({language, onChange}) {
  const isFrench = Boolean(language === 'french');
  const buttonName = isFrench ? 'English' : 'Française';
  const changeTo = isFrench ? 'english' : 'french';
  const globeIcon = <>&#127760;</>;

  return (
    <LanguageSelectorButton
      onClick={() => onChange(`${changeTo}`)}> 
       {buttonName}
    </LanguageSelectorButton>
  );
}

LanguageSelector.propTypes = {
  language: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
