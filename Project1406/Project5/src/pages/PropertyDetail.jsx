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
      <div className="row align-items-start">
        <div className="col-md-7">
          <div className="property-image shadow-lg rounded mb-4">
            <img src={property.image} alt={property.title} className="img-fluid rounded" />
          </div>
        </div>
        <div className="col-md-5">
          <div className="property-info bg-white p-4 shadow rounded">
            <h2 className="mb-3">{property.title}</h2>
            <p className="text-muted">This elegant property offers modern comfort in a great location.</p>
            <ul className="list-group list-group-flush mb-3">
              <li className="list-group-item">✔️ Free Wi-Fi</li>
              <li className="list-group-item">✔️ Fully Furnished</li>
              <li className="list-group-item">✔️ Near Public Transport</li>
              <li className="list-group-item">✔️ Safe Neighborhood</li>
            </ul>
            <button className="btn btn-success btn-lg w-100" onClick={handleBooking}>
              Book Now
            </button>
          </div>
        </div>
      </div>

      {showModal && <BookingModal onClose={closeModal} />}
    </div>
  );
};

export default PropertyDetail;
