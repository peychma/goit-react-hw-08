import { NavLink } from 'react-router-dom';
import clsx from "classnames";
import css from './AuthNav.module.css';


export const AuthNav = () => {
    const getActiveLink = ({ isActive }) =>
        clsx(css.link, {
            [css.active]: isActive,
    });
  return (
    <div className={css.linkdiv}>
      <NavLink className={getActiveLink} to="/register">Register</NavLink>
      <NavLink className={getActiveLink} to="/login">Log In</NavLink>
    </div>
  );
};
