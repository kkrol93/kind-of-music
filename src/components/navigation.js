import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  background: transparent;
  padding: 10px 20px;
  @media (max-width: 850px) {
    width: 100%;
  }
`;
const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 5px 20px;
  font-weight: 700;
  font-family: 'Courgette', cursive;
  font-size: 20px;
  transition: color 0.3s linear;
  background: #000;
  &:hover {
    color: #9b1112;
  }
`;
const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  z-index: 5;

  @media (max-width: 850px) {
    transform: translateY(-150%);
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    background: #000;
    width: 100%;
    height: 100%;
    padding: 20px;
    z-index: 10;
    transition: all 0.3s linear;
    position: relative;
    border: 1px solid #9b1112;

    &.active {
      transform: translateY(10%) !important;
    }
  }
`;
const MobileButton = styled.span`
  cursor: pointer;
  display: block;
  width: 30px;
  height: 25px;
  float: right;
  position: relative;
  z-index: 10;
  color: #9b1112;
  /* position: absolute;
  right: 30px;
  top: 0; */
  bottom: 0;
  @media (min-width: 850px) {
    display: none;
  }
  &.active {
    i {
      &:nth-child(1) {
        -webkit-animation: inT 0.8s forwards;
        animation: inT 0.8s forwards;
      }

      &:nth-child(2) {
        -webkit-animation: inM 0.8s forwards;
        animation: inM 0.8s forwards;
      }

      &:nth-child(3) {
        -webkit-animation: inBtm 0.8s forwards;
        animation: inBtm 0.8s forwards;
      }
    }
  }
  i {
    background-color: #9b1112;
    border-radius: 2px;
    content: '';
    display: block;
    width: 100%;
    height: 4px;
    &:nth-child(1) {
      -webkit-animation: outT 0.8s backwards;
      animation: outT 0.8s backwards;
      -webkit-animation-direction: reverse;
      animation-direction: reverse;
    }
    &:nth-child(2) {
      margin: 5px 0;
      -webkit-animation: outM 0.8s backwards;
      animation: outM 0.8s backwards;
      -webkit-animation-direction: reverse;
      animation-direction: reverse;
    }

    &:nth-child(3) {
      -webkit-animation: outBtm 0.8s backwards;
      animation: outBtm 0.8s backwards;
      -webkit-animation-direction: reverse;
      animation-direction: reverse;
    }
  }
  @-webkit-keyframes inM {
    50% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(45deg);
    }
  }

  @keyframes inM {
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(45deg);
    }
  }

  @-webkit-keyframes outM {
    50% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(45deg);
    }
  }

  @keyframes outM {
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(45deg);
    }
  }

  @-webkit-keyframes inT {
    0% {
      -webkit-transform: translateY(0px) rotate(0deg);
    }
    50% {
      -webkit-transform: translateY(9px) rotate(0deg);
    }
    100% {
      -webkit-transform: translateY(9px) rotate(135deg);
    }
  }

  @keyframes inT {
    0% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(9px) rotate(0deg);
    }
    100% {
      transform: translateY(9px) rotate(135deg);
    }
  }

  @-webkit-keyframes outT {
    0% {
      -webkit-transform: translateY(0px) rotate(0deg);
    }
    50% {
      -webkit-transform: translateY(9px) rotate(0deg);
    }
    100% {
      -webkit-transform: translateY(9px) rotate(135deg);
    }
  }

  @keyframes outT {
    0% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(9px) rotate(0deg);
    }
    100% {
      transform: translateY(9px) rotate(135deg);
    }
  }

  @-webkit-keyframes inBtm {
    0% {
      -webkit-transform: translateY(0px) rotate(0deg);
    }
    50% {
      -webkit-transform: translateY(-9px) rotate(0deg);
    }
    100% {
      -webkit-transform: translateY(-9px) rotate(135deg);
    }
  }

  @keyframes inBtm {
    0% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-9px) rotate(0deg);
    }
    100% {
      transform: translateY(-9px) rotate(135deg);
    }
  }

  @-webkit-keyframes outBtm {
    0% {
      -webkit-transform: translateY(0px) rotate(0deg);
    }
    50% {
      -webkit-transform: translateY(-9px) rotate(0deg);
    }
    100% {
      -webkit-transform: translateY(-9px) rotate(135deg);
    }
  }

  @keyframes outBtm {
    0% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-9px) rotate(0deg);
    }
    100% {
      transform: translateY(-9px) rotate(135deg);
    }
  }
`;
const Navigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <Nav>
      <MobileButton className={open ? 'active' : ''} onClick={() => setOpen(!open)}>
        <i></i>
        <i></i>
        <i></i>
      </MobileButton>
      <Links className={open ? 'active' : ''} onClick={() => setOpen(!open)}>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/hobbies">Zainteresowania</StyledLink>
        <StyledLink to="/skills">Umiejętności</StyledLink>
        <StyledLink to="/portfolio">Portfolio</StyledLink>
        <StyledLink to="/contact">Kontakt</StyledLink>
      </Links>
    </Nav>
  );
};
export default Navigation;
