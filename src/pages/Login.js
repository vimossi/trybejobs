import React, {useState} from 'react';
import { Navigate } from 'react-router-dom';
// import Todo from '../pages/Home';

export default function Login() {
  
  const [email, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

const handleChange = ({ target }) => {
  setUserEmail(target.value);
};

const handlePassword = ({ target }) => {
  setPassword(target.value);
};

const validaPassword = () => {
  const passwordLength = 6;
  if (password.length >= passwordLength) {
    return true;
  }
  return false;
};

const validaLogin = () => {
  const emailIsValid = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i;
  const enable = emailIsValid.test(email);
  if (enable) {
    return true;
  }
  return false;
};

const validateRoute = () => {
  if (validaLogin && validaPassword === true) {
    return <Navigate to="/Todo" />
  }
}


  return (
    <form>
      <label htmlFor="email">
        <input
          className="em-input"
          type="email"
          data-testid="email-input"
          name="email"
          onChange={ handleChange }
          value={ email }
        />
      </label>

      <label htmlFor="password">
        <input
          className="em-input"
          type="password"
          data-testid="password-input"
          name="password"
          onChange={ handlePassword }
          value={ password }
        />
      </label>

      <button
        type="submit"
        data-testid="login-submit-btn"
        // onClick={ redirectToTarget }
        disabled={ !(validaLogin() && validaPassword()) }
        onClick={ validateRoute() }
      >
        Entrar
      </button>
    </form>
  );
  }