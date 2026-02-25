import { useApi } from "../hooks/useApi";

const Feed = () => {
  const { data, loading } = useApi(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
  );

  // https://jsonplaceholder.typicode.com/posts?_limit=5

  if (loading) return <h3>Loading feed...</h3>;

  return (
    <div>
      {data.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
};

export default Feed;
