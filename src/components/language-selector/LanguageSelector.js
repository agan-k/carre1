import PropTypes from 'prop-types';
import {LanguageSelectorButton, GlobeIcon} from './styled';

export default function LanguageSelector({language, onChange}) {
  const isFrench = Boolean(language === 'french');
  const buttonName = isFrench ? 'English' : 'Française';
  const changeTo = isFrench ? 'english' : 'french';

  return (
    <LanguageSelectorButton
      onClick={() => onChange(`${changeTo}`)}> 
      <GlobeIcon>&#127760;</GlobeIcon>
      &nbsp;{buttonName}
    </LanguageSelectorButton>
  );
}

LanguageSelector.propTypes = {
  language: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
