import styled from "styled-components";
import roverPath from "../images/rover.png";

const RoverStyle = styled.img`
  width: 100%;
  background-color: sandybrown;
  border-radius: 50%;
  box-shadow: 0px 0px 20px rgb(245, 4, 4);
`;

const Rover = () => {
  return <RoverStyle src={roverPath} alt="<oO>" />;
};

export default Rover;
