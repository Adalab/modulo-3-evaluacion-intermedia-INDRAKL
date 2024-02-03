import PropTypes from "prop-types";

function QuoteItem({ quote, character }) {
  return (
    <>
      <p>
        {quote}
        {character}
      </p>
    </>
  );
}

QuoteItem.propTypes = {
  quote: PropTypes.string,
  character: PropTypes.string,
};
export default QuoteItem;
