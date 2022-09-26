import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { AiOutlineTool } from "react-icons/ai";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with the following technologies in the web development world. Now I'm focused towards React and Next.js.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML, CSS, JavaScript, React, Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Next.js, Wordpress
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            PS, XD, Zeplin, Figma, Avocode
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <AiOutlineTool size="5.5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Other Tools</ListTitle>
          <ListParagraph>
            Experience with <br />
            WordPress CMS, Jira, Trello, Git
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
