import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <Section row nopadding>
  <LeftSection>
    <SectionTitle>
      Welcome to <br/>
      My Personal Portfolio
    </SectionTitle>
    <SectionText>
      Full Stack Web Developer...
    </SectionText>
    <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
  </LeftSection>
 </Section>
);

export default Hero;