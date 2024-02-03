import PropTypes from "prop-types";

function QuoteItem({ quote, character }) {
  return (
    <>
      {quote} - <span className="character">{character}</span>
    </>
  );
}

QuoteItem.propTypes = {
  quote: PropTypes.string,
  character: PropTypes.string,
};
export default QuoteItem;
