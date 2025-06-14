import React from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

export default function BookingModal({ event, seats, onClose }) {
  const ticketInfo = `${event.Title} | Seats: ${seats.join(", ")}`;

  return ReactDOM.createPortal(
    <div className="modal fade show d-block" style={{ backgroundColor: "#00000099" }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content text-center">
          <div className="modal-header">
            <h5 className="modal-title">Ticket Confirmed!</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <p><strong>{event.Title}</strong></p>
            <p>Seats: {seats.join(", ")}</p>
            <div style={{ background: 'white', padding: '10px', display: 'inline-block' }}>
              <QRCode value={ticketInfo} size={128} />
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
