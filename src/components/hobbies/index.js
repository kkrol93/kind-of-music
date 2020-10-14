import React from 'react';
import styled from 'styled-components';
import Music from './music';
import It from './it';
import Travels from './travels';
import Psychology from './psychology';

const StyledHobbies = styled.main`
  padding: 10vh 5vw;
`;
const HobbiesContainer = styled.article`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    height: auto;
  }
`;

const Hobbies = () => {
  return (
    <StyledHobbies>
      <HobbiesContainer>
        <Music />
        <It />
        <Travels />
        <Psychology />
      </HobbiesContainer>
    </StyledHobbies>
  );
};
export default Hobbies;
