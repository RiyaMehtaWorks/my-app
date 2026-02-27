import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Feed</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/child">Profile Child 1</Link>
        <Link to="profile/child">Profile Child 2 ✅</Link>
      </nav>

      <Outlet />
    </div>
  );
}
