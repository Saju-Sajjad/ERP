
import { styled } from '@mui/system';
import logo from '../../assets/logo.png'
const LogoImage = styled('img')({
  width: '149px',
  height: '57px',
  top: '42px',
  left: '50px',
  position: 'absolute',
});

const Logo = () => {
  return (
    <LogoImage
      src={logo}
      alt="Logo"
    />
    
  );
};

export default Logo;
