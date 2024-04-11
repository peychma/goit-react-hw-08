import { Helmet } from 'react-helmet';
import { LoginForm } from '../../components/loginForm/LoginForm';

export default function Login() {
  return (
    <div>
      <Helmet>
        <h1>Login</h1>
      </Helmet>
      <LoginForm />
    </div>
  );
}