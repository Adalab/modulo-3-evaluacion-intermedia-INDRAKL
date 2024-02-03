import PropTypes from "prop-types";
import QuoteItem from "./QuoteItem";

function QuotesList({ quotes }) {
  const htmlQuotes = quotes.map((quote, idx) => (
    <li key={idx} className="quoteitem">
      <QuoteItem quote={quote.quote} character={quote.character}></QuoteItem>
    </li>
  ));
  return (
    <ul className="quoteslist">
      <li>{htmlQuotes}</li>
    </ul>
  );
}

QuoteItem.PropTypes = {
  quotes: PropTypes.array,
};
export default QuotesList;
