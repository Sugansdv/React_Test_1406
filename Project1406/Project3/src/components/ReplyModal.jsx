import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export default function ReplyModal({ isOpen, onClose, onSend }) {
  const [reply, setReply] = useState('');

  useEffect(() => {
    if (isOpen) setReply('');
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal fade show" style={{ display: 'block' }} onClick={onClose}>
      <div
        className="modal-dialog modal-dialog-centered"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Write a Reply</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <textarea
              className="form-control"
              rows="6"
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              placeholder="Type your reply here..."
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              disabled={!reply.trim()}
              onClick={() => {
                onSend(reply.trim());
                onClose();
              }}
            >
              Send
            </button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
