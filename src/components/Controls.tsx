import { Autorenew, Loop, ArrowForward, ArrowBack } from "@material-ui/icons";
import styled from "styled-components";

const ControlsContainer = styled.div`
  position: absolute;
  transform: translate(117%, 128.2%);
`;

const StyledButton = styled.button<{ onClick: () => void }>`
  color: white;
  background: #13a74a6e;
  display: flex;
  width: auto;
  padding: 5px;
  align-items: center;
`;

export interface ControlsProps {
  handlers: {
    handlerBack: () => void;
    handlerLeft: () => void;
    handlerRight: () => void;
    handlerFwd: () => void;
  };
}

export const Controls = (props: ControlsProps) => {
  return (
    <ControlsContainer>
      <StyledButton className="fwd" onClick={() => props.handlers.handlerFwd()}>
        <ArrowForward></ArrowForward>
      </StyledButton>
      <StyledButton
        className="back"
        onClick={() => props.handlers.handlerBack()}
      >
        <ArrowBack></ArrowBack>
      </StyledButton>
      <StyledButton
        className="right"
        onClick={() => props.handlers.handlerRight()}
      >
        <Autorenew></Autorenew>
      </StyledButton>
      <StyledButton
        className="left"
        onClick={() => props.handlers.handlerLeft()}
      >
        <Loop></Loop>
      </StyledButton>
    </ControlsContainer>
  );
};
