import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href='tel: 2236162655'>tel: 2236162655</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href='amparocardosobosch@gmail.com'>amparocardosobosch@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one proyect at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href='https://github.com/bosxch'>
        <AiFillGithub size='3rem'/>
      </SocialIcons>
      <SocialIcons href='in/amparo-cardoso-bosch'>
        <AiFillLinkedin size='3rem'/>
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
