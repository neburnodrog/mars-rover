import styled from "styled-components";

const ContainerInstructions = styled.div`
  position: absolute;
  top: 25.5%;
  left: 35%;
`;

const InstructionForm = styled.form`
  display: flex;
`;

const StyledInput = styled.input`
  background: #13a74a6e;
  color: white;
  padding: 10px;
`;

const Instructions = () => {
  return (
    <ContainerInstructions>
      <InstructionForm action="" className="form">
        <StyledInput type="text" />
        <StyledInput type="submit" value="Send Instructions" />
      </InstructionForm>
    </ContainerInstructions>
  );
};

export default Instructions;
