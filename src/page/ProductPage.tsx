import ErrorBoundary from "../components/ErrorBoundary";
import Recommendations from "../components/Recommendations";

export default function ProductPage() {
  return (
    <div>
      <h1>Product Name</h1>
      <p>Price: ₹999</p>
      <button>Add to Cart</button>

      <ErrorBoundary>
        <Recommendations />
      </ErrorBoundary>
    </div>
  );
}
