import { Container, CloseMenu, NewProduct, Logout, Line } from './style';
import Close from '../../assets/close.svg';
import { Search } from '../../components/IconSearch';
import { Input } from '../../components/Input';
import { Footer } from '../../components/Footer';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';

export const Menu = () => {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();
  const isAdmin = user.isAdmin;

  const SignOut = () => {
    signOut();
    navigate('/');
  };

  return (
    <Container>
      <CloseMenu to="/">
        <img src={Close} alt="Image to close the menu" />
        <p>Menu</p>
      </CloseMenu>

      <Input
        icon={Search}
        className="Search"
        placeholder={'Search for dishes or ingredients'}
      />

      {isAdmin ? <NewProduct to="/create">New product</NewProduct> : <></>}

      {isAdmin ? <Line /> : <></>}

      <Logout onClick={SignOut}>Logout</Logout>
      {isAdmin ? <Line /> : <></>}

      <Footer />
    </Container>
  );
};
