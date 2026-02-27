import { useState } from "react";
import RestaurantList from "./components/RestaurantList";

const restaurants = [
  { id: 1, name: "Veg Palace", price: 200, rating: 4.5 },
  { id: 2, name: "Spicy Hub", price: 350, rating: 4.2 },
  { id: 3, name: "Budget Bites", price: 150, rating: 3.9 },
];

export default function App() {
  const [dark, setDark] = useState(false);
  const [filters] = useState({ price: 500, rating: 4 });

  return (
    <div
      style={{
        background: dark ? "#222" : "#fff",
        color: dark ? "#fff" : "#000",
      }}
    >
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>

      <RestaurantList restaurants={restaurants} filters={filters} />
    </div>
  );
}
