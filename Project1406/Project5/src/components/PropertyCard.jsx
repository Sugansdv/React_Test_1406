import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; 

const PropertyCard = ({ property }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm property-card">
        <img
          src={property.image}
          className="card-img-top"
          alt={property.title}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title">{property.title}</h5>
          <Link to={`/properties/${property.id}`} className="btn btn-primary mt-3">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
