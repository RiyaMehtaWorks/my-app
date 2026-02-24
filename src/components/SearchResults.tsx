import { useEffect, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const SearchResults = ({ query }: { query: string }) => {
  const [results, setResults] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (!query) return;
    setStatus("loading");

    const controller = new AbortController();

    fetch(`https://dummyjson.com/products/search?q=${query}`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setResults(data.products.map((p: any) => p.title));
        setStatus("success");
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error("Fetch Failed");
          setStatus("error");
        }
      });

    return () => {
      controller.abort();
    };
  }, [query]);

  if (status === "loading") return <h3>Loading... Please wait</h3>;

  if (status === "error") return <h4>Something went wrong</h4>;

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
