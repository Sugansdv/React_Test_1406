import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const withAuthProtection = (Component) => {
  return (props) => {
    const { user } = useAuth();
    if (!user) return <Navigate to="/" replace />;
    return <Component {...props} />;
  };
};

export default withAuthProtection;
