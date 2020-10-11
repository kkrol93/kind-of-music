import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

const StyledMusic = styled.section`
  width: 44.5vw;
  height: 39.5vh;
  position: relative;

  margin: 0 0.5vh 0.5vh 0;
`;
const Text = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover p {
    opacity: 1;
  }
  h1 {
    font-size: 25px;
    padding: 30px 0 0 30px;
  }
  p {
    opacity: 0;
    padding: 0 150px 20px 30px;
    transition: opacity 0.5s linear;
    line-height: 2;
  }
`;
const StyledImg = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  height: 40vh;
  z-index: 0;
`;

const Music = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(filter: { frontmatter: { title: { eq: "Muzyka" } } }) {
        edges {
          node {
            frontmatter {
              title
              description
              img {
                childImageSharp {
                  fluid(
                    duotone: { highlight: "#000000", shadow: "#000000", opacity: 60 }
                    toFormat: JPG
                    quality: 100
                  ) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  const music = data.allMdx.edges[0].node.frontmatter;
  return (
    <StyledMusic>
      <Text>
        <h1>{music.title}</h1>
        <p>{music.description}</p>
      </Text>
      <StyledImg fluid={music.img.childImageSharp.fluid} />
    </StyledMusic>
  );
};
export default Music;