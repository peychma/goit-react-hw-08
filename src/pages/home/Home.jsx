import { NavLink } from "react-router-dom";
import style from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <h1>Phonebook</h1>
        <div className={style.container}>
           <h2>My Phone Book: Manage your contacts</h2> 
          <NavLink
            data-aos="zoom-in"
            className={style.buttonContacts}
            to="/contacts">
            Go to contacts
          </NavLink>
        </div>
    </div>
  );
};

export default Home;
