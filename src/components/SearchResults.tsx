import { useEffect, useState } from "react";

const SearchResults = ({ query }: { query: string }) => {
  const [results, setResults] = useState<string[]>([]);

  useEffect(() => {
    if (!query) return;
    const controller = new AbortController();

    fetch(`https://dummyjson.com/products/search?q=${query}`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setResults(data.products.map((p: any) => p.title));
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error("Fetch Failed");
        }
      });

    return () => {
      controller.abort();
    };
  }, [query]);

  return (
    <div>
      <h1>Search Results</h1>
      {results.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
    </div>
  );
};

export default SearchResults;
// https://dummyjson.com/products/search?q=
