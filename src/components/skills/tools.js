import React from 'react';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

const SkillPannel = styled.div`
  width: 100%;
  margin: 0px 0;
  padding: 30px 15px;
  background: #000;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #fff;
    z-index: -1;
    background: linear-gradient(235deg, #9b1112, #010615, #9b1112);
  }
  &:after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #fff;
    z-index: -2;
    filter: blur(10px);
    background: linear-gradient(235deg, #9b1112, #010615, #9b1112);
  }
`;
const SkillImg = styled(Image)`
  margin: 0 10px 10px;
  @media (max-width: 800px) {
    margin: 10px 0;
  }
`;
const SkillHeading = styled.h3`
  position: absolute;
  top: -15px;
  font-size: 20px;
  padding: 0 15px;
  left: 15px;
`;

const ToolsSkill = () => {
  const data = useStaticQuery(
    graphql`
      {
        allFile(filter: { absolutePath: { regex: "/tools/" } }, sort: { fields: name }) {
          nodes {
            id
            childImageSharp {
              fixed(height: 80) {
                ...GatsbyImageSharpFixed_noBase64
              }
            }
          }
        }
      }
    `
  );
  return (
    <SkillPannel>
      <SkillHeading>Inne</SkillHeading>
      {data
        ? data.allFile.nodes.map((skill) => (
            <SkillImg key={skill.id} fixed={skill.childImageSharp.fixed} />
          ))
        : ''}
    </SkillPannel>
  );
};
export default ToolsSkill;
