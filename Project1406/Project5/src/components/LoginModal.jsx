import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useAuth } from '../context/AuthContext';

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1050,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    background: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center'
  }
};

export default function LoginModal() {
  const { login, setShowLoginModal } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = e => {
    e.preventDefault();
    login(email, password);
  };

  return ReactDOM.createPortal(
    <div style={modalStyles.overlay}>
      <div style={modalStyles.content}>
        <h4 className="mb-3">🔐 User Login</h4>
        <form onSubmit={handleLogin}>
          <div className="form-group mb-3 text-start">
            <label>Email</label>
            <input type="email" className="form-control" required value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="form-group mb-3 text-start">
            <label>Password</label>
            <input type="password" className="form-control" required value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-success w-100">Login</button>
        </form>
        <button className="btn btn-link mt-2 text-danger" onClick={() => setShowLoginModal(false)}>Cancel</button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}
