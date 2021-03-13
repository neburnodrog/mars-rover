import styled from "styled-components";
import marsPic from "../images/mars2.jpg";
import { GridComponent } from "./Grid";

const Mars = styled.div`
  border-radius: 50%;
  background-image: url(${marsPic});
  background-repeat: no-repeat;
  background-size: 800px;
  background-position: -50px;
  width: 700px;
  height: 700px;
  margin: auto;
  display: flex;
`;

export const MarsComponent = () => {
  return (
    <Mars>
      <GridComponent></GridComponent>
    </Mars>
  );
};