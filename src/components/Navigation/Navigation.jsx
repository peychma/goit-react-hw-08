import { NavLink } from 'react-router-dom';
import { useAuth } from '../../redux/auth/selectors';
import clsx from "classnames";
import css from './Navigation.module.css';

export const Navigation = () => {
    const { isLoggedIn } = useAuth();
    const getActiveLink = ({ isActive }) =>
        clsx(css.link, {
            [css.active]: isActive,
    });

  return (
    <nav className={css.nav}>
      <NavLink className={getActiveLink} to="/">Home</NavLink>
      {isLoggedIn && (
        <NavLink className={getActiveLink} to="/contacts">Contacts</NavLink>
      )}
    </nav>
  );
};