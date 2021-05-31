import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.nav`
  height: 3rem;
  width: 100vw;
  position: fixed;
  top: 0;
  background: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.secondaryColor};
`;
export const NavContainer = styled.div``;
export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: centers;
`;
export const LogoImage = styled.img``;
export const NavItemsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const NavItem = styled.li`
  list-style: none;
  margin: 0 1rem;
`;
export const NavItemLInk = styled(Link)`
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: bold;
  color: ${(props) => props.theme.secondaryColor};
`;
