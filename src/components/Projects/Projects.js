import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { Modal, Box } from "@mui/material";
import {ProjectCard} from '../ProjectCard/ProjectCard.jsx'
import {useState} from 'react'

const Projects = () => {
  const [imgs, setProject] = useState({});
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  return(
  <Section id='projects'>
    <SectionDivider/>
    <SectionTitle main>_Proyectos</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source, visit }) => (
        <BlogCard key={id}>
          <Img 
          style={{'cursor': 'pointer'}}
          src={image[0]}
          onClick={() => {
            setProject(image);
            handleOpen();
          }}
          />
          <TitleContent>
            <HeaderThree 
            title 
            style={{'cursor': 'pointer'}} 
            onClick={() => {
            setProject(image);
            handleOpen();
          }}
          >//{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <br/>
            <TitleContent>Tecnologías usadas</TitleContent>
            
            <TagList>
              {tags.map((tag, idx) => (
                <Tag key={idx}>{tag}</Tag>
      ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit} target='_blank'>Source Code</ExternalLinks>
            <ExternalLinks href={source} target='_blank'>Live Demo</ExternalLinks>
          </UtilityList>
        </BlogCard>
))}
    </GridContainer>
    <Modal
    open={open}
    onClose={handleClose}
    >
      <Box>
          <ProjectCard 
          imgs={imgs}
          handleClose={() => setOpen(false)}
          />
      </Box>
    </Modal>
  </Section>
  )
};

export default Projects;