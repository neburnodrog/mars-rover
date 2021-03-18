import { Autorenew, Loop, ArrowForward, ArrowBack } from '@material-ui/icons';
import styled from 'styled-components';

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

export type ControlsProps = {
  handlers: {
    handlerFwd: () => void;
    handlerBck: () => void;
    handlerLeft: () => void;
    handlerRight: () => void;
  };
};

export const Controls: React.FC<ControlsProps> = ({ handlers }) => {
  return (
    <ControlsContainer>
      <StyledButton className="forward" onClick={() => handlers.handlerFwd()}>
        <ArrowForward></ArrowForward>
      </StyledButton>
      <StyledButton className="back" onClick={() => handlers.handlerBck()}>
        <ArrowBack></ArrowBack>
      </StyledButton>
      <StyledButton className="left" onClick={() => handlers.handlerLeft()}>
        <Autorenew></Autorenew>
      </StyledButton>
      <StyledButton className="right" onClick={() => handlers.handlerRight()}>
        <Loop></Loop>
      </StyledButton>
    </ControlsContainer>
  );
};
