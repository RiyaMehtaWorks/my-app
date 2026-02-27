import { useMemo } from "react";
type Props = {
  restaurants: {
    id: number;
    name: string;
    price: number;
    rating: number;
  }[];
  filters: {
    price: number;
    rating: number;
  };
};

export default function RestaurantList({ restaurants, filters }: Props) {
  //   const filtered = restaurants.filter((r) => {
  // console.log("Filtering running...");
  //     return r;
  //     // return r.price < filters.price && r.rating >= filters.rating;
  //   });
  const filtered = useMemo(() => {
    console.log("Filter running...");

    return restaurants.filter((r) => {
      return r.price < filters.price && r.rating >= filters.rating;
    });
  }, [restaurants, filters]);

  return (
    <div>
      {filtered.map((r) => (
        <p key={r.id}>{r.name}</p>
      ))}
    </div>
  );
}
