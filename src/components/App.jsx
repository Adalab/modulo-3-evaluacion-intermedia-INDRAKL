import { useState } from "react";
import "../scss/App.scss";
import Filters from "./Filters";
import Header from "./Header";
import QuotesList from "./QuotesList";
import DataQuotes from "../data/quotes.json";

function App() {
  const [quotes, SetQuotes] = useState(DataQuotes);
  return (
    <div>
      <Header></Header>
      <main>
        <Filters></Filters>
        <QuotesList quotes={quotes}></QuotesList>
      </main>
    </div>
  );
}

export default App;
