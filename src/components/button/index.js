import styled from "styled-components";
const Button = ({ variant, textColor, children }) => {
  return (
    <>
      <StyledButton variant={variant} textColor={textColor}>
        {children}
      </StyledButton>
    </>
  );
};
const StyledButton = styled.button`
  background: ${(props) => props.variant};
  color: ${(props) => props.textColor};
  height: 2rem;
  padding: 0.3rem;
`;
export default Button;
