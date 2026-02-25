// pages/PaymentPage.tsx
type Props = {
  destination: string;
  dates: string;
  passengers: number;
  resetBooking: () => void;
};

function PaymentPage({ destination, dates, passengers, resetBooking }: Props) {
  console.log("PaymentPage render");

  return (
    <div>
      <h2>Payment</h2>

      <p>Destination: {destination}</p>
      <p>Dates: {dates}</p>
      <p>Passengers: {passengers}</p>

      <br />

      <button onClick={resetBooking}>Complete Booking</button>
    </div>
  );
}

export default PaymentPage;
