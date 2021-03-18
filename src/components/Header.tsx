import headerPath from '../images/text-1615485536015.png';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 50%;
  margin: 70px auto;
  transform: rotate(-3deg) skew(11deg);
  padding-bottom: 3px;
  border-bottom: 10px solid #81398a;
  box-shadow: 0px 5px 50px 10px #13a74a;
  background-color: #13a74991;
`;

const HeaderImg = styled.img`
  width: 100%;
`;

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderImg src={headerPath} alt="Ironhack Mars Mission" />
    </HeaderContainer>
  );
};
