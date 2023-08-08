import {
  Container,
  HeaderComponent,
  Menu,
  Logo,
  ReceiptNotification,
  LogoAdmin,
  ContentInput,
  Logout,
} from './style';
import MenuIcon from '../../assets/menu.svg';
import LogoIcon from '../../assets/logo.svg';
import ReceiptIcon from '../../assets/receipt.svg';
import LogoutIcon from '../../assets/logout.svg';
import { FiSearch } from 'react-icons/fi';
import { Button } from '../Button';
import { Receipt } from '../../components/IconReceipt';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

export function Header({ onChange }) {
  const navigate = useNavigate();
  const { signOut, user } = useAuth();
  const isAdmin = user.isAdmin;

  const handleClickNewProduct = () => {
    navigate('/create');
  };

  return (
    <Container>
      <HeaderComponent>
        <Menu to="/menu">
          <img src={MenuIcon} alt="Image to go to Menu" />
        </Menu>

        {!isAdmin ? (
          <Logo>
            <img src={LogoIcon} alt="Logo" />
          </Logo>
        ) : (
          <LogoAdmin>
            <img src={LogoIcon} alt="Logo Admin" />
            <p>admin</p>
          </LogoAdmin>
        )}

        {!isAdmin && (
          <ReceiptNotification>
            <button>
              <img src={ReceiptIcon} alt="Image to access orders" />
            </button>
            <p>0</p>
          </ReceiptNotification>
        )}

        <ContentInput>
          <FiSearch />
          <input
            type={'text'}
            name={'search'}
            id={'search'}
            placeholder={'Search for dishes or ingredients'}
            onChange={onChange}
          />
        </ContentInput>

        {!isAdmin ? (
          <Button icon={Receipt} title={`Requests ${`(0)`}`} />
        ) : (
          <Button title={'New dish'} onClick={handleClickNewProduct} />
        )}

        <Logout onClick={signOut}>
          <img src={LogoutIcon} alt={'Image to exit'} />
        </Logout>
      </HeaderComponent>
    </Container>
  );
}
