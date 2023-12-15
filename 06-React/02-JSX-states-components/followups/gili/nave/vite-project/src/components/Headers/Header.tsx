import styled from 'styled-components';
import { FiUser, FiMail, FiMenu, FiSun } from 'react-icons/fi';

const HeaderContainer = styled.header`
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

const MenuItem = styled.div`
  margin-right: 2.5rem;
  cursor: pointer;
`;

const DarkModeToggle = styled(FiSun)`
  cursor: pointer;
`;

const Header = () => {
  return (
    <HeaderContainer className='HeaderContainer'>
      <Logo>
      <img src="src/assets/logo.png" alt="MyLogo" />
      </Logo>
      <Navigation className= "Navigation">
        <MenuItem>עמוד הבית</MenuItem>
        <MenuItem>קצת עלינו</MenuItem>
        <MenuItem>הפרויקטים שלנו</MenuItem>
        <MenuItem>יצירת קשר</MenuItem>
        <MenuItem>
          <FiUser />
        </MenuItem>
        <MenuItem>
          <FiMail />
        </MenuItem>
        <DarkModeToggle />
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
