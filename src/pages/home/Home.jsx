import { NavLink } from "react-router-dom";
import css from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <h1>Phonebook</h1>
        <div>
           <h2>My Phone Book: Manage your contacts</h2> 
          <NavLink data-aos="zoom-in" className={css.button} to="/contacts"> Go to contacts </NavLink>
        </div>
    </div>
  );
};

export default Home;
