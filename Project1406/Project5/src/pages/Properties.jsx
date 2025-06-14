import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProperties } from '../api/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';

export default function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const getProperties = async () => {
      try {
        const response = await fetchProperties();
        setProperties(response.data);
      } catch (error) {
        console.error('Failed to fetch properties:', error);
      }
    };

    getProperties();
  }, []);

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <p className="lead text-muted">Find your next home with ease and comfort.</p>
      </div>

      <h3 className="text-center mb-4 text-dark">Featured Properties</h3>

      <div className="row">
        {properties.length > 0 ? (
          properties.map((property) => (
            <div className="col-md-4 mb-4" key={property.id}>
              <div className="card h-100 border-0 shadow rounded-4 overflow-hidden">
                <div style={{ overflow: 'hidden' }}>
                  <img
                    src={property.image}
                    alt={property.title}
                    className="img-fluid"
                    style={{
                      height: '220px',
                      width: '100%',
                      objectFit: 'cover',
                      borderBottom: '1px solid #ddd',
                    }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{property.title}</h5>
                  <p className="card-text text-muted small">
                    Explore this stunning property featuring elegant interiors, spacious rooms, and excellent connectivity.
                  </p>
                  <Link to={`/properties/${property.id}`} className="btn btn-warning mt-auto">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-muted mt-5">
            <p>No properties available right now. Please check back soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}
