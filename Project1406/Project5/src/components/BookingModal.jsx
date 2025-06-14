import React from 'react';
import ReactDOM from 'react-dom';

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 1050,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    background: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 0 30px rgba(0,0,0,0.3)'
  }
};

const BookingModal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div style={modalStyles.overlay}>
      <div style={modalStyles.content}>
        <h4 className="mb-3 text-success">🎉 Booking Confirmed!</h4>
        <p className="text-muted">
          Thank you for your reservation! Your property booking is now confirmed. We'll contact you with further details soon.
        </p>
        <button className="btn btn-outline-success mt-4 px-4" onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default BookingModal;
