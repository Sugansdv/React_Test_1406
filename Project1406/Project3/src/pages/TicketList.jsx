import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { mockTickets } from '../data/mockTickets';

function formatDate(dateStr) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateStr).toLocaleDateString(undefined, options);
}

const getRandomAvatar = (name) => {
  const hash = name.split('').reduce((acc, char) => char.charCodeAt(0) + acc, 0);
  const randomSeed = hash % 1000; 
  
  const styles = ['identicon', 'avataaars', 'bottts', 'micah', 'pixel-art'];
  const randomStyle = styles[hash % styles.length];
  
  return `https://api.dicebear.com/7.x/${randomStyle}/svg?seed=${randomSeed}`;
};

export default function TicketList() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setTickets(mockTickets);
    }, 300);
  }, []);

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'urgent':
        return 'danger';
      case 'normal':
        return 'primary';
      case 'minor':
        return 'secondary';
      default:
        return 'light';
    }
  };

  return (
    <div className="container my-5">
      <h1 className="text-center text-primary mb-5">
        <i className="bi bi-ticket-detailed-fill me-2"></i>Tickets
      </h1>

      {tickets.length === 0 ? (
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '200px' }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Loading tickets...</p>
        </div>
      ) : (
        <div className="row g-4 justify-content-center">
          {tickets.map((ticket) => (
            <div className="col-md-6 col-lg-4" key={ticket.id}>
              <Link to={`/tickets/${ticket.id}`} className="text-decoration-none">
                <div className="card h-100 shadow-sm border-0 ticket-card-hover">
                  <div className="card-header bg-primary text-white">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="mb-0 text-truncate w-75">{ticket.subject}</h5>
                      <span className={`badge bg-${
                        ticket.status === 'Open'
                          ? 'success'
                          : ticket.status === 'Pending'
                          ? 'warning'
                          : 'secondary'
                      }`}>
                        {ticket.status}
                      </span>
                    </div>
                    <div className="mt-1 small">
                      <i className="bi bi-person-circle me-1"></i>
                      {ticket.customer}
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="mb-2">
                      <i className="bi bi-flag-fill text-danger me-2"></i>
                      <strong>Priority:</strong>{' '}
                      <span className={`badge bg-${getPriorityColor(ticket.priority)}`}>
                        {ticket.priority}
                      </span>
                    </p>
                    <p className="mb-2 d-flex align-items-center">
                      <i className="bi bi-person-badge-fill text-secondary me-2"></i>
                      <strong>Assigned To:</strong> 
                      <img 
                        src={getRandomAvatar(ticket.assignedTo)} 
                        alt={ticket.assignedTo}
                        className="rounded-circle ms-2"
                        style={{ width: '24px', height: '24px' }}
                      />
                      <span className="ms-1">{ticket.assignedTo}</span>
                    </p>
                    <p className="text-muted mb-0">
                      <i className="bi bi-clock me-2"></i>
                      <small>Created: {formatDate(ticket.createdAt)}</small>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}