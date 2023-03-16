import PropTypes from 'prop-types';

export default function QuotedText({children}) {
  return (
    <i>
      <blockquote>
          &#0750;{children}&#0750;
      </blockquote>
    </i>
  );
}

QuotedText.propTypes = {
  children: PropTypes.string,
};
