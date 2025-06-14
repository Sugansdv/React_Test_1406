// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">🏡 Welcome to RentalApp</h1>
      <p className="text-center text-muted fs-5 mb-5">
        Discover the perfect rental property for your next stay. Whether you're looking for a modern apartment, a cozy home, or a luxury villa, we’ve got you covered.
      </p>

      <div className="row text-center mb-5">
        <div className="col-md-4 mb-4">
          <h4>🛏 Comfortable Stays</h4>
          <p className="text-muted">All our properties are well-furnished and equipped with essential amenities.</p>
        </div>
        <div className="col-md-4 mb-4">
          <h4>📍 Prime Locations</h4>
          <p className="text-muted">Stay in safe and central neighborhoods with easy access to transport.</p>
        </div>
        <div className="col-md-4 mb-4">
          <h4>💼 Hassle-Free Booking</h4>
          <p className="text-muted">Register and book properties in just a few clicks—no hidden fees.</p>
        </div>
      </div>
    </div>
  );
}
