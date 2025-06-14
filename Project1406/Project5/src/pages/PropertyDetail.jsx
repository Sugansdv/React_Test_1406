import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPropertyById } from '../api/api';
import BookingModal from '../components/BookingModal';
import { useAuth } from '../context/AuthContext';
import '../styles.css';

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const getProperty = async () => {
      try {
        const response = await fetchPropertyById(id);
        setProperty(response.data);
      } catch (error) {
        console.error('Error fetching property:', error);
      }
    };
    getProperty();
  }, [id]);

  const handleBooking = () => {
    if (!user) {
      alert("Please login to book a property");
      navigate("/");
      return;
    }
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  if (!property) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container my-5">
      <div className="property-image text-center mb-4">
        <img src={property.image} alt={property.title} className="img-fluid rounded shadow" />
      </div>

      <div className="property-info bg-white p-4 shadow rounded">
        <h2 className="mb-3 text-center">{property.title}</h2>
        <p className="text-muted text-center">
          Discover comfort and convenience with this beautifully designed property, perfect for both relaxation and daily living.
        </p>

        <ul className="list-group list-group-flush mb-4">
          <li className="list-group-item">🌟 Air Conditioning & Heating</li>
          <li className="list-group-item">🛏️ Spacious Bedrooms & Modern Kitchen</li>
          <li className="list-group-item">🛡️ 24/7 Security and Gated Access</li>
          <li className="list-group-item">🚆 Excellent Connectivity to City Center</li>
        </ul>
<div className='text-center'>
  
        <button className="btn btn-success btn-lg w-50" onClick={handleBooking}>
          Book Now
        </button>
</div>
      </div>

      {showModal && <BookingModal onClose={closeModal} />}
    </div>
  );
};

export default PropertyDetail;
