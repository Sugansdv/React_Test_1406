import React, { useState } from 'react';

export default function LoginModal({ isOpen, onClose, onLogin }) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('agent');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const userData = { name: name.trim(), role };
    localStorage.setItem('user', JSON.stringify(userData));
    onLogin(userData);
    onClose(); // Close the modal to prevent black background
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content p-4 rounded bg-white shadow" style={{ maxWidth: '400px' }}>
        <h4 className="mb-3">Login</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Your Name (e.g., Agent Mia)"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <select className="form-select" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="agent">Agent</option>
              <option value="admin">Admin</option>
              <option value="customer">Customer</option>
            </select>
          </div>
          <button className="btn btn-primary w-100" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
