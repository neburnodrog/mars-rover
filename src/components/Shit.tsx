import ShitImage from '../images/shit.gif';
import styled from 'styled-components';

const ShitStyle = styled.img`
  width: 100%;
  background-color: transparent;
`;

export const Shit: React.FC = () => {
  return <ShitStyle src={ShitImage} alt="shit" />;
};
