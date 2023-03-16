import PropTypes from 'prop-types';
import {QuotedTextWrapper} from './styled';

export default function QuotedText({children}) {
  return (
    <QuotedTextWrapper>
      &#0750;{children}&#0750;
    </QuotedTextWrapper>
  );
}

QuotedText.propTypes = {
  children: PropTypes.string,
};
