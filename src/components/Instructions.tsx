import React, { useState } from 'react';
import styled from 'styled-components';

const ContainerInstructions = styled.div`
  position: absolute;
  top: 29.5%;
  left: 39%;
`;

const InstructionForm = styled.div`
  display: flex;
`;

const StyledInput = styled.input<{ valid: boolean }>`
  background: #13a74a6e;
  color: white;
  padding: 8px 15px;
  font-size: 0.8em;
  border: 2px solid ${(props) => (props.valid ? '#81398a' : 'red')};
`;

const StyledButton = styled.button`
  background: #13a74a6e;
  color: white;
  padding: 8px 15px;
  font-size: 0.8em;
  border: 2px solid #81398a;
`;

export type InstructionsProps = {
  handleInstructions: (instructions: string) => void;
};

export const Instructions: React.FC<InstructionsProps> = ({ handleInstructions }) => {
  const [instructions, setInstructions] = useState(() => {
    return '';
  });

  const [valid, setValid] = useState(true);

  const onClick = () => {
    if (/^[lrfb ]+$/.test(instructions)) {
      handleInstructions(instructions);
      setInstructions('');
      setValid(true);
    } else {
      alert('We cannot send this instructions as they are invalid!');
      setInstructions('');
      setValid(true);
    }
  };

  const handleChange = (value: string) => {
    setInstructions(value);

    if (/^[lrfb ]+$/.test(value) || value === '') {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  return (
    <ContainerInstructions>
      <InstructionForm className="form">
        <StyledInput valid={valid} value={instructions} type="text" onChange={(e) => handleChange(e.target.value)} />
        <StyledButton onClick={onClick}>Send Instructions</StyledButton>
      </InstructionForm>
    </ContainerInstructions>
  );
};
