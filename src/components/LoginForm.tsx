import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const handleLogin = () => {
    if (!email) {
      setError("Something");
    }
  };

  return (
    <div>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginForm;
