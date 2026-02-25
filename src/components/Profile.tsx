import { useApi } from "../hooks/useApi";

const Profile = () => {
  const { data, loading } = useApi(
    "https://jsonplaceholder.typicode.com/users",
  );

  if (loading) return <h3>Loading users...</h3>;

  return (
    <div>
      {data.map((u) => (
        <p key={u.id}>{u.name}</p>
      ))}
    </div>
  );
};

export default Profile;
