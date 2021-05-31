import styled, { keyframes } from "styled-components";
export const SpinnerAnimation = keyframes`
  0% {
  top: 8px;
  height: 64px;
}
50%, 100% {
  top: 24px;
  height: 32px;
}
  `;
export const SpinnerWrapper = styled.div`
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: #fff;

  animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  animation-delay: 1.2s;
  animation-duration: 1.2s;
  animation-name: ${SpinnerAnimation};
  animation-iteration-count: infinite;

  &:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
    background: red;
  }
  &:nth-child(2) {
    left: 32px;
    animation-delay: -0.12s;
  }
  &:nth-child(3) {
    left: 56px;
    animation-delay: 0;
  }
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  background: red;
  border: 1rem solid #000;
`;
