import PlantImage from '../images/plant.png';
import styled from 'styled-components';

const PlantStyle = styled.img`
  width: 100%;
  background-color: transparent;
`;

export const Plant: React.FC = () => {
  return <PlantStyle src={PlantImage} alt="plant" />;
};
