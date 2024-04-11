import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log('Email:', form.elements.email.value);
    console.log('Password:', form.elements.password.value);
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

    return (
    <div>
    <h2 className={css.title}>Log in</h2>
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input className={css.input} type="email" name="email" placeholder='Enter your email...'/>
      </label>
      <label className={css.label}>
        Password
        <input className={css.input} type="password" name="password" placeholder='Enter your password...'/>
      </label>
      <button className={css.button} type="submit">Log In</button>
    </form>
    </div>
  );
};
