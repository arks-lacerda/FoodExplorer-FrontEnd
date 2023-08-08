import { Container, Logo, SignInContent, CreateAccount } from './styles';
import Logotype from '../../assets/logo.svg';
import { Label } from '../../components/Label';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useAuth } from '../../hooks/auth';
import { useState } from 'react';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  const handleSignIn = (e) => {
    e.preventDefault();
    signIn({ email, password });
  };

  return (
    <Container>
      <Logo>
        <img src={Logotype} alt="Logo" />
      </Logo>

      <SignInContent>
        <h1>Sign In</h1>
        <Label title={'Email'} htmlFor={'email'} />
        <Input
          placeholder={'Example: jonhdoe@email.com'}
          id={'email'}
          type={'email'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Label title={'Password'} htmlFor={'password'} />
        <Input
          placeholder={'No mínimo 6 caracteres'}
          id={'password'}
          min={6}
          required
          type={'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title={'To enter'} type={'submit'} onClick={handleSignIn} />
      </SignInContent>

      <CreateAccount to="/register">
        <p>create an account</p>
      </CreateAccount>
    </Container>
  );
};
