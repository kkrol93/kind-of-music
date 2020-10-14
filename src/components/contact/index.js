import React from 'react';
import styled from 'styled-components';
import Space from './space';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import cv from '../../assets/pdf/cv.pdf';

const StyledContact = styled.main`
  margin-top: 50px;
  padding: 20px;
  display: flex;
  align-items: center;
`;
const ContactText = styled.div`
  max-width: 500px;
  width: 100%;
  padding: 20px;
`;
const AnimationContainer = styled.div`
  max-width: 950px;
  width: 100%;
`;
const ContactIcon = styled(FontAwesomeIcon)`
  font-size: 50px;
  margin-right: 20px !important;
`;
const ContactParagraph = styled.p`
  margin-bottom: 15px;
  font-size: 20px;
`;
const ContactHeading = styled.h1`
  margin-bottom: 15px;
  font-size: 40px;
`;
const Contact = () => {
  return (
    <StyledContact>
      <AnimationContainer>
        <Space />
      </AnimationContainer>
      <ContactText>
        <ContactHeading>Kontakt</ContactHeading>
        <ContactParagraph>Jeżeli masz pytania zapraszam do kontaktu:</ContactParagraph>
        <ContactParagraph>
          <FontAwesomeIcon icon={faEnvelope} /> krzysztof.krol@kindofmusic.pl
        </ContactParagraph>
        <div>
          <a href="https://www.linkedin.com/in/krzysztofkrol1993/" target="blank" rel="noopener">
            <ContactIcon icon={faLinkedin} color="#0077b5" />
          </a>
          <a href="https://github.com/kkrol93" target="blank" rel="noopener">
            <ContactIcon icon={faGithub} color="#fff" />
          </a>
          <a href={cv} target="blank" rel="noopener">
            <ContactIcon icon={faFilePdf} color="#9b1112" />
          </a>
        </div>
      </ContactText>
    </StyledContact>
  );
};
export default Contact;
