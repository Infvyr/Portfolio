import React from 'react';
import {Section, SectionDivider, SectionTitle} from '../../styles/GlobalComponents';
import { GridContainer } from './ProjectsStyles';
import {ExternalLinks} from "../Cards/CardStyles";

import {projects} from '../../constants/constants';
import ProjectCard from "../Cards/ProjectCard";

const Projects = () => {
  return (
    <Section id="projects">
      <SectionDivider divider />
      <SectionTitle>Latest Projects</SectionTitle>
      <GridContainer>
        {projects
          .sort((a,b) => a.order - b.order)
          .map(card => <ProjectCard item={card} key={card.id} />)
          .slice(0, 3)
        }
      </GridContainer>
      <ExternalLinks href='/all-projects' className="link-to" title="See more projects">See more</ExternalLinks>
    </Section>
)};

export default Projects;