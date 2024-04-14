/*import { Navigate } from 'react-router-dom';
import { useAuth } from './redux/auth/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};*/

import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from './redux/auth/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const loggedIn = useSelector(selectIsLoggedIn);
  const refreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !loggedIn && !refreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};


