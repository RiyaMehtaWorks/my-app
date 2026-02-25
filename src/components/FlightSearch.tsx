// import { useState } from "react";

// function FlightSearch() {
//   const [destination, setDestination] = useState("");
//   const [flights, setFlights] = useState<string[]>([]);
//   const [price, setPrice] = useState(0);

//   function handleSearch(newDestination: string) {
//     setDestination(newDestination);

//     // Reset immediately
//     setFlights([]);
//     setPrice(0);

//     // Simulate API delay for flights
//     setTimeout(() => {
//       setFlights([`${newDestination} Flight A`, `${newDestination} Flight B`]);
//     }, 1000);

//     // Simulate API delay for price
//     setTimeout(() => {
//       setPrice(Math.floor(Math.random() * 5000) + 3000);
//     }, 1500);
//   }

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Search Flights</h2>

//       <button
//         onClick={() => handleSearch("Goa")}
//         style={{ marginRight: "10px", fontSize: "20px" }}
//       >
//         Delhi → Goa
//       </button>

//       <button
//         onClick={() => handleSearch("Manali")}
//         style={{ fontSize: "20px" }}
//       >
//         Delhi → Manali
//       </button>

//       <hr />

//       <h3>Destination: {destination}</h3>

//       <h4>Flights:</h4>
//       {flights.length === 0 ? (
//         <p>Loading flights...</p>
//       ) : (
//         flights.map((flight, index) => <p key={index}>{flight}</p>)
//       )}

//       <h4>Price: ₹{price}</h4>
//     </div>
//   );
// }

// export default FlightSearch;

import { useReducer } from "react";

type State = {
  destination: string;
  flights: string[];
  price: number;
  loading: boolean;
};

type Action =
  | { type: "SEARCH_START"; payload: string }
  | { type: "SEARCH_SUCCESS"; payload: { flights: string[]; price: number } };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SEARCH_START":
      return {
        ...state,
        destination: action.payload,
        flights: [],
        price: 0,
        loading: true,
      };

    case "SEARCH_SUCCESS":
      return {
        ...state,
        flights: action.payload.flights,
        price: action.payload.price,
        loading: false,
      };

    default:
      return state;
  }
}

function FlightSearch() {
  const [state, dispatch] = useReducer(reducer, {
    destination: "",
    flights: [],
    price: 0,
    loading: false,
  });

  function handleSearch(newDestination: string) {
    dispatch({ type: "SEARCH_START", payload: newDestination });

    setTimeout(() => {
      dispatch({
        type: "SEARCH_SUCCESS",
        payload: {
          flights: [`${newDestination} Flight A`, `${newDestination} Flight B`],
          price: Math.floor(Math.random() * 5000) + 3000,
        },
      });
    }, 1500);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search Flights (useReducer)</h2>

      <button onClick={() => handleSearch("Goa")}>Delhi → Goa</button>

      <button onClick={() => handleSearch("Manali")}>Delhi → Manali</button>

      <hr />

      <h3>Destination: {state.destination}</h3>

      {state.loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h4>Flights:</h4>
          {state.flights.map((flight, index) => (
            <p key={index}>{flight}</p>
          ))}
          <h4>Price: ₹{state.price}</h4>
        </>
      )}
    </div>
  );
}

export default FlightSearch;
