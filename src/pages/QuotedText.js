import PropTypes from 'prop-types';
import {QuotedTextWrapper} from './styled';

export default function QuotedText({children, fontSize, color, padding}) {
  return (
    <QuotedTextWrapper fontSize={fontSize} color={color} padding={padding}>
      <i>
        <blockquote>
          &#0750;{children}&#0750;
        </blockquote>
      </i>
    </QuotedTextWrapper>
  );
}

QuotedText.propTypes = {
  children: PropTypes.string,
  fontSize: PropTypes.number,
  padding: PropTypes.array,
  color: PropTypes.string,
};
