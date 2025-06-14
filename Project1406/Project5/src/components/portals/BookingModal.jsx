import ReactDOM from 'react-dom';
// import './Modal.css';

const BookingModal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <h4>Select Dates</h4>
        <input type="date" className="form-control mb-2" />
        <input type="date" className="form-control mb-3" />
        <button className="btn btn-primary">Confirm Booking</button>
        <button className="btn btn-secondary mt-2" onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body
  );
};

export default BookingModal;
