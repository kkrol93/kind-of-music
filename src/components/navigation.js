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
  font-size: 20px;
  transition: color 0.3s linear;
  &:hover {
    color: #9b1112;
  }
`;
const Navigation = () => (
  <Nav>
    <div>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/hobbies">Zainteresowania</StyledLink>
      <StyledLink to="/skills">Umiejętności</StyledLink>
    </div>
  </Nav>
);
export default Navigation;
