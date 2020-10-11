import React from 'react';
import styled from 'styled-components';
import LanguagesSkill from './languages';
import FrameworksSkill from './frameworks';

const StyledSkills = styled.main`
  margin: 20vh 40px 10vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Skills = () => {
  return (
    <StyledSkills>
      <LanguagesSkill />
      <FrameworksSkill />
    </StyledSkills>
  );
};
export default Skills;
