import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardContainer = styled.div`
  height: 20rem;
  width: 13rem;
  background: #fff;
  box-shadow: 2rem;
  border-radius: 0.3rem;
  margin: 1rem;
`;
export const CardLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.secondaryColor};
`;
export const CardImage = styled.img`
  height: 9rem;
  width: 13rem;
  border-radius: 0.3rem;
`;
export const CardBody = styled.div`
  padding: 0 1rem;
`;
export const CardPrice = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;
export const CardTitle = styled.h4``;
export const CardStatus = styled.span``;
export const CardDescription = styled.p``;
export const CardCapacity = styled.span``;
