import React from 'react';
import styled from 'styled-components';
import LanguagesSkill from './languages';
import FrameworksSkill from './frameworks';
import DesignSkill from './design';

const StyledSkills = styled.main`
  margin: 20vh auto 10vh;
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

const Skills = () => {
  return (
    <StyledSkills>
      <LanguagesSkill />
      <DesignSkill />
      <FrameworksSkill />
    </StyledSkills>
  );
};
export default Skills;
