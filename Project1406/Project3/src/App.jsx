import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TicketList from './pages/TicketList';
import TicketDetail from './pages/TicketDetail';
import { AuthProvider, useAuth } from './context/AuthContext';
import withRoleGuard from './hoc/withRoleGuard';
import Navbar from './components/Navbar';
import LoginModal from './components/LoginModal';
import './App.css';
import Home from './pages/HomePage';

const ProtectedTicketDetail = withRoleGuard(TicketDetail, ['agent', 'admin']);

function AppWrapper() {
  const { user, login } = useAuth();
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Navbar onLoginClick={() => setShowLogin(true)} />
      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        onLogin={(userData) => {
          login(userData);
          setShowLogin(false);
        }}
      />

      <Routes>
  <Route path="/" element={<Navigate to="/home" />} />
  <Route path="/home" element={<Home />} />
  <Route path="/tickets" element={<TicketList />} />
  <Route path="/tickets/:ticketId" element={<ProtectedTicketDetail />} />
</Routes>
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppWrapper />
      </BrowserRouter>
    </AuthProvider>
  );
}
