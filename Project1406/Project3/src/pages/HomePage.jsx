import React from 'react';
import { useAuth } from '../context/AuthContext'; 

export default function HomePage() {
  const { user } = useAuth();

  return (
    <div className="container my-5 text-center">
      <h1 className="mb-4">🏠 Welcome to the Support Portal</h1>
      {user ? (
        <h4 className="text-success">Hello, {user.name} ({user.role})</h4>
      ) : (
        <h5 className="text-muted">Please log in to continue</h5>
      )}
      <p className="mt-3">
        Use the navigation to view or respond to support tickets.
      </p>
    </div>
  );
}
