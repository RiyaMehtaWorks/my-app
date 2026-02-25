// // pages/FlightPage.tsx
// import FlightList from "../components/FlightList";

// type Props = {
//   destination: string;
//   dates: string;
//   passengers: number;
//   nextStep: () => void;
// };

// function FlightPage({ destination, dates, passengers, nextStep }: Props) {
//   console.log("FlightPage render");

//   return (
//     <div>
//       <h2>Flights to {destination}</h2>
//       <p>Dates: {dates}</p>
//       <p>Passengers: {passengers}</p>

//       <FlightList destination={destination} />

//       <br />
//       <button onClick={nextStep}>Proceed to Payment</button>
//     </div>
//   );
// }

// export default FlightPage;

import { useBookingStore } from "../context/bookingStore";
import FlightList from "../components/FlightList";

function FlightPage() {
  const destination = useBookingStore((s) => s.destination);
  const dates = useBookingStore((s) => s.dates);
  const passengers = useBookingStore((s) => s.passengers);
  const nextStep = useBookingStore((s) => s.nextStep);

  console.log("FlightPage render");

  return (
    <div>
      <h2>Flights to {destination}</h2>
      <p>Dates: {dates}</p>
      <p>Passengers: {passengers}</p>

      <FlightList />

      <br />
      <button onClick={nextStep}>Proceed to Payment</button>
    </div>
  );
}

export default FlightPage;
