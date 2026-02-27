import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Layout from "./components/Layout";

function Feed() {
  return <h2>Feed Page</h2>;
}

function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <Outlet />
    </div>
  );
}
function ProfileChild() {
  return <h2>ProfileChild Page</h2>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Feed />} />
          <Route path="profile" element={<Profile />}>
            <Route path="child" element={<ProfileChild />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
