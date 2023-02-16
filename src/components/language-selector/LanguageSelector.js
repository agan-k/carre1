import PropTypes from 'prop-types';
import {Button, Box} from '~src/shared';

export default function LanguageSelector({language, onChange}) {
  // console.log(language)
  const isFrench = Boolean(language === 'french');
  return(
    <Box>
      {isFrench ? 
        <Button onClick={() => onChange('english')}>
          English</Button> :
        <Button onClick={() => onChange('french')}>French</Button>
      }
    </Box>
  );
}

LanguageSelector.propTypes = {
  language: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
