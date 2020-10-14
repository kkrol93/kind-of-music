import React from 'react';
import styled from 'styled-components';
import LanguagesSkill from './languages';
import FrameworksSkill from './frameworks';
import DesignSkill from './design';
import ToolsSkill from './tools';

const StyledSkills = styled.main`
  margin: 20vh auto 10vh;
  max-width: 1100px;
  width: 100%;
  display: flex;
  padding: 15px;
  flex-wrap: wrap;
  justify-content: center;
`;
const ColumnSkills = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Skills = () => {
  return (
    <StyledSkills>
      <ColumnSkills>
        <LanguagesSkill />
        <FrameworksSkill />
      </ColumnSkills>
      <ColumnSkills>
        <DesignSkill />

        <ToolsSkill />
      </ColumnSkills>
    </StyledSkills>
  );
};
export default Skills;
