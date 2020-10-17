import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';
import gsap from 'gsap';

const Header = styled.main`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 100vh;

  @media (max-width: 850px) {
    flex-wrap: wrap;
    justify-content: space-around;
  }
  @media (min-width: 850px) {
    margin-top: 200px;
  }
  @media (min-width: 1250px) {
    margin-top: 50px;
  }
`;
const HeaderImage = styled(Image)`
  max-width: 650px;
  width: 100%;
  height: auto;
`;
const HeaderText = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 10 auto;
  @media (min-width: 700px) {
    max-width: 800px;
  }
  @media (min-width: 1200px) {
    max-width: 750px;
  }
`;
const ShadowBox = styled.div`
  max-width: 700px;
  width: 100%;
  background: #000;
  position: relative;
  padding: 25px;
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
  @media (max-width: 850px) {
    margin: 50px auto 10px;
  }
`;
const HeaderHeading = styled.h1`
  font-size: 35px;
  margin-bottom: 15px;
  letter-spacing: 2px;
`;
const HeaderParagraph = styled.p`
  margin-bottom: 15px;
  line-height: 2;
  font-size: 18px;
  /* font-weight: 300; */
`;

const MainPage = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "header" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  useEffect(() => {
    const Heading = document.getElementById('heading');
    const Paragraph = [...document.querySelectorAll('p')];
    gsap.set([Heading, Paragraph], {
      autoAlpha: 0,
    });
    let tl = gsap.timeline({
      duration: 1,
    });
    tl.fromTo(Heading, { scaleX: 0, transformOrigin: 'left' }, { scaleX: 1, autoAlpha: 1 });
    Paragraph.forEach((paragraph) => {
      tl.fromTo(paragraph, {}, { autoAlpha: 1, duration: 1 });
    });
  }, []);
  return (
    <Header>
      <HeaderText>
        <ShadowBox>
          <HeaderHeading id="heading">Hello!</HeaderHeading>
          <HeaderParagraph id="header-paragraf-one">
            Mam na imię Krzysiek! Jestem wygadanym człowiekiem, który nie umie usiedzieć w jednym
            miejscu. Prywatnie pasjonata muzyki różnych gatunków jak rock/metal, muzyka klasyczna,
            alternatywna czy czasem nawet jazz. Lubię odkrywać nowe zespoły jak i sam w domowym
            zaciszu skomponować. Hobbistycznie uczę się homerecordingu, ale ze względu na małą ilość
            wolnego czasu jeszcze długa droga przede mną, abym coś wrzucił swojego.
          </HeaderParagraph>
          <HeaderParagraph id="header-paragraf-two">
            Zawodowo inżynier informatyki. Rozwijam się w tworzeniu stron internetowych głównie w
            FRONT-END. Swoja przygodę w programowaniu zacząłem dwa lata temu i cały czas rozwijam
            swoje umiejętności. Niemniej jednak znalazłem w tym swoją drogę i dążę do bycia jak
            najlepszym
          </HeaderParagraph>
        </ShadowBox>
      </HeaderText>
      <HeaderImage
        fluid={data.file.childImageSharp.fluid}
        objectPosition="50% 100%"
        durationFadeIn={10000}
      />
    </Header>
  );
};
export default MainPage;
