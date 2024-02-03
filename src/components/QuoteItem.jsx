import PropTypes from "prop-types";

function QuoteItem({ quote, character }) {
  return (
    <>
      {quote}
      {character}
    </>
  );
}

QuoteItem.propTypes = {
  quote: PropTypes.string,
  character: PropTypes.string,
};
export default QuoteItem;
