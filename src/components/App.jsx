import { useState } from "react";
import "../scss/App.scss";
import Filters from "./Filters";
import Header from "./Header";
import QuotesList from "./QuotesList";
import DataQuotes from "../data/quotes.json";
import Addquote from "./Addquote";

function App() {
  const [quotes, SetQuotes] = useState(DataQuotes);
  const [filterQuote, setFilterQuote] = useState("");

  const handlefilterQuote = (filterValue) => {
    setFilterQuote(filterValue);
  };
  const filteredQuotes = quotes.filter((quote) =>
    quote.quote.toLowerCase().includes(filterQuote.toLowerCase())
  );

  return (
    <div>
      <Header></Header>
      <main>
        <Filters handlefilterQuote={handlefilterQuote}></Filters>
        <QuotesList quotes={filteredQuotes}></QuotesList>
        <Addquote></Addquote>
      </main>
    </div>
  );
}

export default App;
