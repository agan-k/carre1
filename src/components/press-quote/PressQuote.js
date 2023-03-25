import PropTypes from 'prop-types';
import {Text, Box} from '../../shared';

export default function PressQuote({quote, source}) {
  return(
    <Box>
      <Text fontStyle={'italic'} fontSize={1}>
        &#0750;{quote}&#0750;
      </Text>
      <Text 
        fontSize={1} 
        fontStyle={'italic'} 
        fontWeight={'600'} 
        textAlign={'right'}>
        ~ {source}
      </Text>
    </Box>
  );
}

PressQuote.propTypes = {
  quote: PropTypes.string,
  source: PropTypes.string,
};
