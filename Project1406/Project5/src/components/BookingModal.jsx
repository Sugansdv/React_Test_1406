import React from 'react';
import ReactDOM from 'react-dom';
import './BookingModal.css';

const BookingModal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className="booking-modal-overlay">
      <div className="booking-modal-content">
        <h3>✅ Booking Successful!</h3>
        <p>Your stay has been reserved. We look forward to hosting you!</p>
        <button className="btn btn-primary mt-3" onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default BookingModal;
