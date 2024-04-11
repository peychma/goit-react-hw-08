import { Helmet } from 'react-helmet';
import { RegisterForm } from '../../components/registrationForm/RegistrationForm';

export default function Register() {
  return (
    <div>
      <Helmet>
        <h1>Registration</h1>
      </Helmet>
      <RegisterForm />
    </div>
  );
}