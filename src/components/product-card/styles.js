import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardContainer = styled.div`
  height: 21rem;
  width: 13rem;
  margin: 0.5rem;
  border-radius: 4px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;
export const CardLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.secondaryColor};
`;
export const CardImage = styled.img`
  height: 13rem;
  width: 13rem;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
`;
export const CardBody = styled.div`
  padding: 0 0.5rem;
`;
export const CardPrice = styled.span`
  font-weight: bold;
  font-size: 1.1rem;
`;
export const CardTitle = styled.span`
  margin: 0.6rem 0;
`;
export const CardStatus = styled.span`
  font-size: 0.9rem;
`;
export const CardDescription = styled.p``;
export const CardCapacity = styled.span`
  font-size: 0.9rem;
`;
export const CardSection = styled.div`
  margin: 0.3rem 0;
`;
