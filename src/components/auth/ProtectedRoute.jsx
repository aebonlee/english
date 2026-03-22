import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function ProtectedRoute({ children, redirectTo = '/login' }) {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="auth-loading" role="status" aria-label="Checking authentication">
        <div className="auth-loading-spinner">
          <div className="spinner-ring" />
        </div>
        <p className="auth-loading-text">Verifying authentication...</p>
      </div>
    );
  }

  // Redirect unauthenticated users to login with return URL
  if (!isAuthenticated) {
    return (
      <Navigate
        to={redirectTo}
        state={{ from: location.pathname + location.search }}
        replace
      />
    );
  }

  // Render children or Outlet (for nested routes)
  return children || <Outlet />;
}
