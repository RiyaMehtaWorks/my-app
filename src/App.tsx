// App.tsx
import { useState } from "react";
import SearchPage from "./pages/SearchPage";
import FlightPage from "./pages/FlightPage";
import PaymentPage from "./pages/PaymentPage";

function App() {
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [currentStep, setCurrentStep] = useState<
    "search" | "flights" | "payment"
  >("search");

  function nextStep() {
    if (currentStep === "search") setCurrentStep("flights");
    else if (currentStep === "flights") setCurrentStep("payment");
  }

  function resetBooking() {
    setDestination("");
    setDates("");
    setPassengers(1);
    setCurrentStep("search");
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>Travel Booking App (Prop Drilling)</h1>

      {currentStep === "search" && (
        <SearchPage
          destination={destination}
          dates={dates}
          passengers={passengers}
          setDestination={setDestination}
          setDates={setDates}
          setPassengers={setPassengers}
          nextStep={nextStep}
        />
      )}

      {currentStep === "flights" && (
        <FlightPage
          destination={destination}
          dates={dates}
          passengers={passengers}
          nextStep={nextStep}
        />
      )}

      {currentStep === "payment" && (
        <PaymentPage
          destination={destination}
          dates={dates}
          passengers={passengers}
          resetBooking={resetBooking}
        />
      )}
    </div>
  );
}

export default App;
