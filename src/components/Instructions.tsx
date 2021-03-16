import styled from "styled-components";

const ContainerInstructions = styled.div`
  position: absolute;
  top: 27.5%;
  left: 37%;
`;

const InstructionForm = styled.form`
  display: flex;
`;

const StyledInput = styled.input`
  background: #13a74a6e;
  color: white;
  padding: 8px 15px;
  font-size: 0.8em;
`;

export interface InstructionsProps {
  onClick: () => void;
}

export const Instructions = (props: InstructionsProps) => {
  return (
    <ContainerInstructions>
      <InstructionForm
        action=""
        className="form"
        onSubmit={(e) => e.preventDefault()}
      >
        <StyledInput type="text" />
        <StyledInput
          type="submit"
          value="Send Instructions"
          onClick={props.onClick}
        />
      </InstructionForm>
    </ContainerInstructions>
  );
};
