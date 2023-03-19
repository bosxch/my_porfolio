import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { FcDocument } from "react-icons/fc";

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Teléfono</LinkTitle>
      <LinkItem href='tel: 2236162655'>tel: 2236162655</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href='amparocardosobosch@gmail.com'>amparocardosobosch@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Creando soluciones web eficientes y escalables para un mundo en constante evolución.</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href='./downloads/CV_Cardoso_Bosch_Amparo.pdf' target='_blank' download='CV Cardoso Bosch Amparo'>
        <FcDocument size='3rem'/>
      </SocialIcons>
        <SocialIcons href='https://github.com/bosxch' target='_blank'>
        <AiFillGithub size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/amparo-cardoso-bosch/' target='_blank'>
        <AiFillLinkedin size='3rem'/>
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
