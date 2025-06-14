import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout, setShowLoginModal } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3 shadow-sm">
      <NavLink className="navbar-brand fw-bold" to="/">RentalApp</NavLink>

      <div className="ms-auto d-flex align-items-center gap-3">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            isActive ? "nav-link text-warning fw-bold" : "nav-link text-white"
          }
        >
          Home
        </NavLink>

        <NavLink 
          to="/properties" 
          className={({ isActive }) => 
            isActive ? "nav-link text-warning fw-bold" : "nav-link text-white"
          }
        >
          Properties
        </NavLink>

        {user ? (
          <>
            <span className="text-white">Welcome, <strong>{user.name}</strong></span>
            <button className="btn btn-outline-light btn-sm" onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <button 
              className="btn btn-outline-light btn-sm"
              onClick={() => setShowLoginModal(true)}
            >
              Login
            </button>
            <NavLink to="/register" className="btn btn-outline-warning btn-sm">
              Register
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
