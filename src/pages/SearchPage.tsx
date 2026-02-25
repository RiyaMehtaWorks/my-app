// // pages/SearchPage.tsx
// type Props = {
//   destination: string;
//   dates: string;
//   passengers: number;
//   setDestination: (d: string) => void;
//   setDates: (d: string) => void;
//   setPassengers: React.Dispatch<React.SetStateAction<number>>;
//   nextStep: () => void;
// };

// function SearchPage({
//   destination,
//   dates,
//   passengers,
//   setDestination,
//   setDates,
//   setPassengers,
//   nextStep,
// }: Props) {
//   console.log("SearchPage render");

//   return (
//     <div>
//       <h2>Search Flights</h2>

//       <input
//         placeholder="Destination"
//         value={destination}
//         onChange={(e) => setDestination(e.target.value)}
//       />

//       <br />
//       <br />

//       <input
//         placeholder="Dates"
//         value={dates}
//         onChange={(e) => setDates(e.target.value)}
//       />

//       <br />
//       <br />

//       <p>Passengers: {passengers}</p>
//       <button onClick={() => setPassengers((p) => p + 1)}>Add Passenger</button>

//       <br />
//       <br />

//       <button onClick={nextStep}>Search Flights</button>
//     </div>
//   );
// }

// export default SearchPage;

import { useEffect } from "react";
import { useBookingStore } from "../context/bookingStore";

function SearchPage() {
  const destination = useBookingStore((s) => s.destination);
  const dates = useBookingStore((s) => s.dates);
  const passengers = useBookingStore((s) => s.passengers);

  const setDestination = useBookingStore((s) => s.setDestination);
  const setDates = useBookingStore((s) => s.setDates);
  const addPassenger = useBookingStore((s) => s.addPassenger);
  const nextStep = useBookingStore((s) => s.nextStep);

  return (
    <div>
      <h2>Search Flights</h2>

      <input
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />

      <br />
      <br />

      <input
        placeholder="Dates"
        value={dates}
        onChange={(e) => setDates(e.target.value)}
      />

      <br />
      <br />

      <p>Passengers: {passengers}</p>
      <button onClick={addPassenger}>Add Passenger</button>

      <br />
      <br />

      <button onClick={nextStep}>Search Flights</button>
    </div>
  );
}

export default SearchPage;
