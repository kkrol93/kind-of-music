import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';
import gsap from 'gsap';

const StyledMusic = styled.section`
  width: 44.5vw;
  height: 100%;
  position: relative;
  margin: 0 0.5vh 0.5vh 0;
  @media (max-width: 1100px) {
    width: 100%;
    height: 350px;
    margin: 20px auto;
  }
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
    margin-bottom: 30px;
  }
  p {
    opacity: 0;
    padding: 0 30px 20px 30px;
    transition: opacity 0.5s linear;
    line-height: 2;

    @media (max-width: 1300px) {
      padding: 10px;
      opacity: 1;
      background: rgba(0, 0, 0, 0.3);
    }
    @media (max-width: 700px) {
      font-size: 12px;
    }
  }
`;
const StyledImg = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 0;
  @media (max-width: 1100px) {
    object-fit: cover !important;
    height: 100%;
    bottom: 0;
  }
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
  useEffect(() => {
    const Music = document.getElementById('music');
    console.log(Music);
    gsap.set([Music], {
      autoAlpha: 0,
    });
    let tl = gsap.timeline({
      duration: 1,
    });
    tl.fromTo(Music, { scaleX: 0, transformOrigin: 'left' }, { scaleX: 1, autoAlpha: 1 });
  }, []);

  const music = data.allMdx.edges[0].node.frontmatter;
  return (
    <StyledMusic id="music">
      <Text>
        <h1>{music.title}</h1>
        <p>{music.description}</p>
      </Text>
      <StyledImg fluid={music.img.childImageSharp.fluid} />
    </StyledMusic>
  );
};
export default Music;
