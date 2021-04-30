import styled from "styled-components";
import { useState } from "react";
const TextInput = ({}) => {
  const [inputValue, setValue] = useState();
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <StyledInput value={inputValue} onChange={handleChange} />
    </>
  );
};
const StyledInput = styled.input`
  padding: 0.3rem;
  outline: none;
`;
export default TextInput;
