import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { mockTickets } from '../data/mockTickets';
import { useAuth } from '../context/AuthContext';
import ReplyModal from '../components/ReplyModal';

export default function TicketDetail() {
  const { ticketId } = useParams();
  const { user } = useAuth();
  const [ticket, setTicket] = useState(null);
  const [isReplyOpen, setIsReplyOpen] = useState(false);

  useEffect(() => {
    const found = mockTickets.find((t) => t.id === ticketId);
    setTicket(found || null);
  }, [ticketId]);

  function handleSendReply(replyText) {
    if (!ticket) return;

    const newMessage = {
      sender: user.name,
      content: replyText,
    };

    setTicket((prev) => ({
      ...prev,
      messages: [...prev.messages, newMessage],
    }));
  }

  if (!ticket) {
    return (
      <div className="container my-5 text-center">
        <h4 className="text-danger">❌ Ticket not found</h4>
      </div>
    );
  }

  const canReply = ['agent', 'admin'].includes(user.role);

  const statusColor = {
    Open: 'success',
    Pending: 'warning',
    Closed: 'secondary',
  };

  const priorityColor = {
    Urgent: 'danger',
    Normal: 'primary',
    Minor: 'secondary',
  };

  return (
    <div className="container my-5">
      <div className="card shadow border-0">
        <div className="card-header bg-primary text-white">
          <h3 className="mb-0">
            <i className="bi bi-ticket-detailed me-2"></i>
            {ticket.subject}
          </h3>
        </div>

        <div className="card-body">
          <div className="row mb-4">
            <div className="col-md-6">
              <p>
                <strong>Status:</strong>{' '}
                <span className={`badge bg-${statusColor[ticket.status] || 'light'}`}>
                  {ticket.status}
                </span>
              </p>
              <p>
                <strong>Priority:</strong>{' '}
                <span className={`badge bg-${priorityColor[ticket.priority] || 'light'}`}>
                  {ticket.priority}
                </span>
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <strong>Customer:</strong> <i className="bi bi-person-circle me-1"></i>
                {ticket.customer}
              </p>
              <p>
                <strong>Assigned to:</strong> <i className="bi bi-person-badge-fill me-1"></i>
                {ticket.assignedTo}
              </p>
            </div>
          </div>

          <hr />

          <h5 className="mb-3">
            <i className="bi bi-chat-dots-fill me-2"></i>Conversation
          </h5>

          <ul className="list-group mb-4">
            {ticket.messages.map((msg, index) => (
              <li
                key={index}
                className={`list-group-item ${
                  msg.sender === ticket.customer ? 'bg-light' : 'bg-white'
                }`}
              >
                <strong>{msg.sender}</strong>: {msg.content}
              </li>
            ))}
          </ul>

          {canReply && (
            <div className="text-end">
              <button
                className="btn btn-outline-primary"
                onClick={() => setIsReplyOpen(true)}
              >
                <i className="bi bi-reply-fill me-1"></i>Reply
              </button>
            </div>
          )}
        </div>
      </div>

      <ReplyModal
        isOpen={isReplyOpen}
        onClose={() => setIsReplyOpen(false)}
        onSend={handleSendReply}
      />
    </div>
  );
}
