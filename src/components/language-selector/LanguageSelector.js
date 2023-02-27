import PropTypes from 'prop-types';
import {Button, Box} from '../../..../../shared';

export default function LanguageSelector({language, onChange}) {
  const isFrench = Boolean(language === 'french');
  return(
    <Box>
      {isFrench ? 
        <Button onClick={() => onChange('english')}>
          English</Button> :
        <Button onClick={() => onChange('french')}>Française</Button>
      }
    </Box>
  );
}

LanguageSelector.propTypes = {
  language: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
