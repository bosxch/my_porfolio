import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => (
 <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      //Amparo  <br/>
      Cardoso Bosch
    </SectionTitle>
    <SectionText>
      I´m a 
      <TypeAnimation
    // Same String at the start will only be typed once, initially
    sequence={[
    ' _Full Stack Web Developer',
    1000,
    ' _Front-end Developer',
    1000,
    ' _Back-end Developer',
    1000,
    ' _Web Developer',
    1000,
    ]}
    speed={50} // Custom Speed from 1-99 - Default Speed: 40
    wrapper="SectionText" // Animation will be rendered as a <span>
    repeat={Infinity} // Repeat this Animation Sequence infinitely
  />
    </SectionText>
    <Button onClick={() => window.location = '#contact'}>Contáctame!</Button>
    <Button>
      <a  href='./downloads/CV_Cardoso_Bosch_Amparo.pdf' target='_blank'  style={{'color':'white'}}>Descarga mi CV!</a>
    </Button>
  </LeftSection>
 </Section>
);

export default Hero;