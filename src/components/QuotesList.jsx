import PropTypes from "prop-types";
import QuoteItem from "./QuoteItem";

function QuotesList({ quotes }) {
  const htmlQuotes = quotes.map((quote, idx) => (
    <li key={idx} className="quoteitem">
      <QuoteItem quote={quote.quote} character={quote.character}></QuoteItem>
    </li>
  ));
  return <ul className="quoteslist">{htmlQuotes}</ul>;
}

QuotesList.propTypes = {
  quotes: PropTypes.array.isRequired,
};

export default QuotesList;
