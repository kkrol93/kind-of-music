import React from 'react';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

const SkillPannel = styled.div`
  width: 100%;
  padding: 30px;
  background: #000;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  position: relative;
  margin-bottom: 30px;
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
  @media (max-width: 1000px) {
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

const LanguagesSkill = () => {
  const data = useStaticQuery(
    graphql`
      {
        allFile(filter: { absolutePath: { regex: "/languages/" } }, sort: { fields: name }) {
          nodes {
            id
            childImageSharp {
              fixed(height: 60) {
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
      <SkillHeading>Języki</SkillHeading>
      {data
        ? data.allFile.nodes.map((skill) => (
            <SkillImg key={skill.id} fixed={skill.childImageSharp.fixed} />
          ))
        : ''}
    </SkillPannel>
  );
};
export default LanguagesSkill;
