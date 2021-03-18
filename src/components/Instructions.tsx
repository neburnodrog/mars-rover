import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const ContainerInstructions = styled.div`
  position: absolute;
  top: 27.5%;
  left: 37%;
`;

const InstructionForm = styled.div`
  display: flex;
`;

const StyledInput = styled.input`
  background: #13a74a6e;
  color: white;
  padding: 8px 15px;
  font-size: 0.8em;
`;

const StyledButton = styled.button`
  background: #13a74a6e;
  color: white;
  padding: 8px 15px;
  font-size: 0.8em;
`;

export type InstructionsProps = {
  handleInstructions: (instructions: string) => void;
};

export const Instructions: React.FC<InstructionsProps> = ({ handleInstructions }) => {
  const [instructions, setInstructions] = useState('');

  const onClick = () => {
    setInstructions('');
    handleInstructions(instructions);
  };

  return (
    <ContainerInstructions>
      <InstructionForm className="form">
        <StyledInput type="text" onChange={(e) => setInstructions(e.target.value)} />
        <StyledButton onClick={onClick}>Send Instructions</StyledButton>
      </InstructionForm>
    </ContainerInstructions>
  );
};
