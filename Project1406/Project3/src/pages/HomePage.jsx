import React from 'react';
import { Link } from 'react-router-dom';
import { mockTickets } from '../data/mockTickets';

const Home = () => {
  // Calculate stats from mock data
  const totalTickets = mockTickets.length;
  const openTickets = mockTickets.filter(t => t.status === 'Open').length;
  const urgentTickets = mockTickets.filter(t => t.priority === 'Urgent').length;
  const recentTickets = [...mockTickets]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 3);

  return (
    <div className="container py-4">
      <div className="row mb-4">
        <div className="col-12">
          <h1 className="display-5 fw-bold text-primary">
            <i className="bi bi-speedometer2 me-2"></i>Dashboard
          </h1>
          <p className="lead">Welcome back! Here's what's happening with your tickets.</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body text-center">
              <h2 className="text-primary">{totalTickets}</h2>
              <p className="mb-0 fw-bold">Total Tickets</p>
              <small className="text-muted">All active tickets</small>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body text-center">
              <h2 className="text-warning">{openTickets}</h2>
              <p className="mb-0 fw-bold">Open Tickets</p>
              <small className="text-muted">Requiring attention</small>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body text-center">
              <h2 className="text-danger">{urgentTickets}</h2>
              <p className="mb-0 fw-bold">Urgent Tickets</p>
              <small className="text-muted">Critical issues</small>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Tickets */}
      <div className="row d-flex justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h5 className="card-title">
                <i className="bi bi-clock-history text-primary me-2"></i>
                Recent Tickets
              </h5>
              <div className="list-group list-group-flush">
                {recentTickets.map(ticket => (
                  <Link 
                    to={`/tickets/${ticket.id}`} 
                    key={ticket.id}
                    className="list-group-item list-group-item-action"
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h6 className="mb-1">{ticket.subject}</h6>
                        <small className="text-muted">
                          #{ticket.id} • {ticket.customer} • {new Date(ticket.createdAt).toLocaleDateString()}
                        </small>
                      </div>
                      <span className={`badge bg-${
                        ticket.status === 'Open' ? 'success' : 
                        ticket.status === 'Pending' ? 'warning' : 'secondary'
                      }`}>
                        {ticket.status}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-3 text-end">
                <Link to="/tickets" className="btn btn-sm btn-outline-primary">
                  View All Tickets <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;