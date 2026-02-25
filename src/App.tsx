import { useBookingStore } from "./context/bookingStore";
import SearchPage from "./pages/SearchPage";
import FlightPage from "./pages/FlightPage";
import PaymentPage from "./pages/PaymentPage";

function App() {
  const currentStep = useBookingStore((s) => s.currentStep);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Travel Booking App (Zustand)</h1>

      {currentStep === "search" && <SearchPage />}
      {currentStep === "flights" && <FlightPage />}
      {currentStep === "payment" && <PaymentPage />}
    </div>
  );
}

export default App;
