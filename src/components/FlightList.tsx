// components/FlightList.tsx
import FlightCard from "./FlightCard";

type Props = {
  destination: string;
};

function FlightList({ destination }: Props) {
  console.log("FlightList render");

  return (
    <div>
      <FlightCard flightName="Flight A" destination={destination} />
      <FlightCard flightName="Flight B" destination={destination} />
      <FlightCard flightName="Flight C" destination={destination} />
    </div>
  );
}

export default FlightList;
