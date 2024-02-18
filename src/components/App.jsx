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

  const handleFilter = (filterName, value) => {
    if (filterName === "quote") {
      setFilterQuote(value.toLowerCase());
    } else if (filterName === "character") {
      setSelectedCharacter(value);
    }
  };

  const filteredQuotes = quotes
    .filter((quote) => quote.quote.toLowerCase().includes(filterQuote))
    .filter((quote) => {
      if (selectedCharacter === "Todos") {
        return true;
      } else {
        return quote.character === selectedCharacter;
      }
    });

  return (
    <div>
      <Header />
      <main>
        <Filters
          filterQuote={filterQuote}
          selectedCharacter={selectedCharacter}
          handleFilter={handleFilter}
        />
        <QuotesList quotes={filteredQuotes} />
        <Addquote />
      </main>
    </div>
  );
}

export default App;
