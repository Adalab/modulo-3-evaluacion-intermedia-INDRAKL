import React, { useState } from "react";
import "../scss/App.scss";
import Filters from "./Filters";
import Header from "./Header";
import QuotesList from "./QuotesList";
import DataQuotes from "../data/quotes.json";
import Addquote from "./Addquote";

function App() {
  const [quotes, setQuotes] = useState(DataQuotes);
  const [filterQuote, setFilterQuote] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState("Todos");

  const handleFilterQuote = (filterValue) => {
    setFilterQuote(filterValue);
  };

  const handleCharacterChange = (event) => {
    setSelectedCharacter(event.target.value);
  };

  const filteredQuotes = quotes.filter((quote) =>
    quote.quote.toLowerCase().includes(filterQuote.toLowerCase())
  );

  return (
    <div>
      <Header />
      <main>
        <Filters
          filterQuote={filterQuote}
          selectedCharacter={selectedCharacter}
          handleFilterQuote={handleFilterQuote}
          handleCharacterChange={handleCharacterChange}
        />
        <QuotesList quotes={filteredQuotes} />
        <Addquote />
      </main>
    </div>
  );
}

export default App;
