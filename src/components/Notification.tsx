import { useApi } from "../hooks/useApi";

const Notification = () => {
  const { data, loading } = useApi(
    "https://jsonplaceholder.typicode.com/comments?_limit=5",
  );

  if (loading) return <h3>Loading Notifications...</h3>;

  return (
    <div>
      {data.map((i) => (
        <p key={i.id}>{i.email}</p>
      ))}
    </div>
  );
};

export default Notification;
