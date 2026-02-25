import { useBookingStore } from "../context/bookingStore";
import FlightList from "../components/FlightList";
import { useQuery } from "@tanstack/react-query";

function FlightPage() {
  const destination = useBookingStore((s) => s.destination);
  const dates = useBookingStore((s) => s.dates);
  const passengers = useBookingStore((s) => s.passengers);
  const nextStep = useBookingStore((s) => s.nextStep);
  const setCurrentStep = useBookingStore((s) => s.setCurrentStep);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["flights", destination, dates],
    queryFn: async () => {
      console.log("API CALLED");

      //FAKE API
      await new Promise((res) => setTimeout(res, 2000));

      //FAKE RESPONSE
      return [
        { id: 1, name: `Flight A to ${destination}` },
        { id: 2, name: `Flight B to ${destination}` },
        { id: 3, name: `Flight C to ${destination}` },
      ];
    },
    enabled: !!destination && !!dates,
    staleTime: 1000 * 60 * 2,
  });

  if (isLoading) return <p>Loading Flights...</p>;
  if (error) return <p>Error loading flights...</p>;

  return (
    <div>
      <h2>Flights to {destination}</h2>
      <p>Dates: {dates}</p>
      <p>Passengers: {passengers}</p>

      <FlightList />

      <br />
      <button onClick={nextStep}>Proceed to Payment</button>
      <br />
      <button
        onClick={() => {
          setCurrentStep("search");
        }}
      >
        Go Back
      </button>
      <button onClick={() => refetch()}>Manual Refetch</button>
    </div>
  );
}

export default FlightPage;
