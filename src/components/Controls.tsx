import { Autorenew, Loop, ArrowForward, ArrowBack } from "@material-ui/icons";
import styled from "styled-components";

const ControlsContainer = styled.div`
  position: absolute;
  transform: translate(117%, 128.2%);
`;

const StyledButton = styled.button`
  color: white;
  background: #13a74a6e;
  display: flex;
  width: auto;
  padding: 5px;
  align-items: center;
`;

const Controls = () => {
  return (
    <ControlsContainer>
      <StyledButton className="fwd">
        <ArrowForward></ArrowForward>
      </StyledButton>
      <StyledButton className="back">
        <ArrowBack></ArrowBack>
      </StyledButton>
      <StyledButton className="right">
        <Autorenew></Autorenew>
      </StyledButton>
      <StyledButton className="left">
        <Loop></Loop>
      </StyledButton>
    </ControlsContainer>
  );
};

export default Controls;
