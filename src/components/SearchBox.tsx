import { useEffect, useState } from "react";

const SearchBox = () => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("search");
    if (saved) {
      setQuery(saved);
    }
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setQuery(value);

    localStorage.setItem("search", value);
  }

  return (
    <div>
      <h4>Search Box</h4>
      <input
        value={query}
        onChange={(e) => handleChange(e)}
        placeholder="Search here.."
      />
    </div>
  );
};

export default SearchBox;
