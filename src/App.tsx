import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { lazy, Suspense } from "react";
// import Home from "./pages/Home";
// import Editor from "./pages/Editor";

// Lazy imports
const Home = lazy(() => import("./pages/Home"));
const Editor = lazy(() => import("./pages/Editor"));

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/editor">Editor</Link>
      </nav>

      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor" element={<Editor />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
