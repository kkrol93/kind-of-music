import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import gsap from 'gsap';

const StyledSite = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 40px 15px;

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
const SiteImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  &:after {
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    content: ' ';
    width: 100%;
    height: 100%;
  }
`;
const SiteText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  h3 {
    margin: 10px 0;
  }
`;
const SiteLinks = styled.div`
  display: block;
  justify-content: center;
  margin-top: 10px;
`;
const Icon = styled(FontAwesomeIcon)`
  font-size: 40px !important;
  color: #9b1112;
`;

const Site = ({ site: { title, img, tech, link, github }, id }) => {
  useEffect(() => {
    const SiteElement = document.getElementById(id);
    gsap.set([SiteElement], {
      scale: 0,
    });
    let tl = gsap.timeline({});
    tl.fromTo(SiteElement, {}, { scale: 1 }, id / 2);
  }, []);
  return (
    <StyledSite id={id}>
      <SiteImage fluid={img.childImageSharp.fluid} />
      <SiteText>
        <h3>{title}</h3>
        <p>{tech}</p>
        <SiteLinks>
          {link ? (
            <a href={link} target="blank" rel="noopener">
              <Icon icon={faGlobeEurope} color="#9b1112" />
            </a>
          ) : (
            ''
          )}
          {github ? (
            <a href={github} target="blank" rel="noopener">
              <Icon icon={faGithub} color="#9b1112" />
            </a>
          ) : (
            ''
          )}
        </SiteLinks>
      </SiteText>
    </StyledSite>
  );
};
Site.propTypes = {
  site: PropTypes.object,
  id: PropTypes.number,
};
export default Site;
