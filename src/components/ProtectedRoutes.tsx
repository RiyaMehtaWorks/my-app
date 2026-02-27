import type { JSX } from "react";
import { Navigate } from "react-router-dom";

type Props = {
  children: JSX.Element;
};

export default function ProtectedRoute({ children }: Props) {
  const isAuthenticated = false; // simulate auth

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
