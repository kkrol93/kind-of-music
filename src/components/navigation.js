import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  background: transparent;
  padding: 10px 20px;
`;
const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 5px 20px;
  font-weight: 700;
  font-family: 'Courgette', cursive;
  font-size: 10px;
  transition: color 0.3s linear;
  &:hover {
    color: #9b1112;
  }
`;
const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
const Navigation = () => (
  <Nav>
    <Links>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/hobbies">Zainteresowania</StyledLink>
      <StyledLink to="/skills">Umiejętności</StyledLink>
      <StyledLink to="/portfolio">Portfolio</StyledLink>
      <StyledLink to="/contact">Kontakt</StyledLink>
    </Links>
  </Nav>
);
export default Navigation;
