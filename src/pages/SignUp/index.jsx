import { Container, Logo, SignInContent, CreateAccount } from './styles';
import Logotype from '../../assets/logo.svg';
import { Label } from '../../components/Label';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useState } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setName('');
      setEmail('');
      setPassword('');
      return alert('All fields must be filled');
    }

    if (password.length < 6) {
      setPassword('');
      return alert('Password must be at least 6 characters long');
    }

    api
      .post('/users/', { name, email, password })
      .then(() => {
        alert('Successfully registered user');
        navigate('/');
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert('Unable to complete registration');
        }
      });
  };

  return (
    <Container>
      <Logo>
        <img src={Logotype} alt="Logo" />
      </Logo>

      <SignInContent>
        <h1>Create your account</h1>

        <Label title={'Name'} htmlFor={'name'} />
        <Input
          placeholder={'Example: John Doe'}
          id={'name'}
          type={'text'}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <Label title={'Email'} htmlFor={'email'} />
        <Input
          placeholder={'Example: jonhdoe@email.com'}
          id={'email'}
          type={'email'}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <Label title={'Password'} htmlFor={'password'} />
        <Input
          placeholder={'At least 6 characters'}
          id={'password'}
          type={'password'}
          min={6}
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <Button
          title={'Create an account'}
          type={'submit'}
          onClick={handleSignUp}
        />
      </SignInContent>

      <CreateAccount to="/">
        <p>I already have an account</p>
      </CreateAccount>
    </Container>
  );
};
