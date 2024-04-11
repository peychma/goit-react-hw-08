import { useSelector } from 'react-redux';
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  console.log('isLoggedIn:', isLoggedIn);
  console.log('isRefreshing:', isRefreshing);
  console.log('user:', user);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
