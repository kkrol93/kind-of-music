import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Site from './site';

const StyledPortfolio = styled.main`
  margin: 120px auto 50px;
  max-width: 1600px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Portfolio = () => {
  const data = useStaticQuery(
    graphql`
      {
        allMdx(filter: { fileAbsolutePath: { regex: "/portfolio/" } }) {
          edges {
            node {
              id
              frontmatter {
                tech
                link
                title
                github
                img {
                  childImageSharp {
                    fluid(maxWidth: 800, quality: 100) {
                      ...GatsbyImageSharpFluid_noBase64
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  return (
    <StyledPortfolio>
      {data.allMdx.edges.map((site) => (
        <Site site={site.node.frontmatter} key={site.node.id} />
      ))}
    </StyledPortfolio>
  );
};
export default Portfolio;
