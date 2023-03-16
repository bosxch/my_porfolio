import React from 'react';
import { 
  DiFirebase, 
  DiCode, 
  DiCodeBadge, 
  DiJavascript1, 
  DiReact, 
  DiCss3,
  DiHtml5,
  DiBootstrap,
  DiPostgresql,
  DiDatabase,
  DiGithubBadge,
  DiNodejs,
  DiNpm,
  DiResponsive,
  DiTerminal,


} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider/>
    <br />
    <SectionTitle>_Tecnologías</SectionTitle>
    <SectionText>
      Trabejé con una variedad de tecnologías en mi carrera como desarrolladora web. 
      Y me apasiona seguir expandiendo esta lista!
      <br/>
      Desde el Front-end hasta el Back-end.
     
    </SectionText>
    <List>
      <ListItem>
        <DiCode size='3rem'/>
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
          Experiencia con <br />
            React.js, Redux.js, Next.js, CSS, HTML, Bootstrap, MaterialUI, webpack.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem'/>
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
          Experiencia con <br />
            Node.js, Express, CORS, dotenv, Morgan, PostgreSQL, Sequelize, Git
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCodeBadge size='3rem'/>
        <ListContainer>
          <ListTitle>Lenguajes</ListTitle>
          <ListParagraph>
            Experiencia con<br />
            JavaScript, TypeScript, HTML, CSS, SQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
   
  </Section>
);

export default Technologies;
