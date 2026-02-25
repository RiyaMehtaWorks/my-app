// // components/FlightCard.tsx
// type Props = {
//   flightName: string;
//   destination: string;
// };

// function FlightCard({ flightName, destination }: Props) {
//   console.log("FlightCard render");

//   return (
//     <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
//       <h4>{flightName}</h4>
//       <p>Destination: {destination}</p>
//     </div>
//   );
// }

// export default FlightCard;

import { useBookingStore } from "../context/bookingStore";

type Props = {
  flightName: string;
};

function FlightCard({ flightName }: Props) {
  const destination = useBookingStore((s) => s.destination);

  console.log("FlightCard render");

  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h4>{flightName}</h4>
      <p>Destination: {destination}</p>
    </div>
  );
}

export default FlightCard;
