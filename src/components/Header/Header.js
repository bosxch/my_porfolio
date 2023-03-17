import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';


import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
 <Container> 
    <Div1>
      <Link href='/'>
        <a style={{display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px'}}>
        <Span style={{'margin-top':'0.5rem', 'cursor':'default'}}>_Bosxch</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Proyectos</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Tecnologías</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>README</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/bosxch' target="_blank">
        <AiFillGithub size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/amparo-cardoso-bosch/' target="_blank">
        <AiFillLinkedin size='3rem'/>
      </SocialIcons>
    </Div3>
 </Container>
);

export default Header;
