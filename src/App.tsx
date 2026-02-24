import { useState } from "react";
import SearchResults from "./components/SearchResults";

const App = () => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <input
        value={query}
        placeholder="Search here"
        onChange={(e) => setQuery(e.target.value)}
      />
      <SearchResults query={query} />
    </div>
  );
};

export default App;
