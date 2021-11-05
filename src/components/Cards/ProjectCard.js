import React, {useState} from 'react';
import {
  Card,
  Button,
  CardInfo,
  ExternalLinks,
  HeaderThree,
  PictureImg,
  Picture,
  Hr,
  ImgContainer,
  Tag,
  TagList,
  TitleContent,
  UtilityList
} from "./CardStyles";
import {BsCodeSlash, BsPlusCircleFill} from "react-icons/bs";
import {FiExternalLink} from "react-icons/fi";

import ProjectModal from "../Modal/ProjectModal";

const ProjectCard = ({item}) => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const toggleModal = () => setIsOpen(!isOpen)

  const {title, description, tags, visit, source, image, imageWebp, images} = item

  return <Card>
    <ImgContainer>
      <Picture>
        <source srcSet={imageWebp} type="image/webp" />
        <PictureImg src={image} alt={title} />
      </Picture>

      <Button
        type="button"
        aria-label="Open Project Modal"
        onClick={openModal}
      >
        <BsPlusCircleFill />
      </Button>
      <ProjectModal isOpen={isOpen} toggleModal={toggleModal} title={title} images={images} />
    </ImgContainer>
    <TitleContent>
      <HeaderThree title>{title}</HeaderThree>
      <Hr />
    </TitleContent>
    <CardInfo className="card-info">{description}</CardInfo>
    <div className="card-footer">
      <TitleContent style={{marginTop: '20px'}}><b>Stack</b></TitleContent>
      <TagList>
        {tags.map((t, i) => {
          return <Tag key={i}>{t}</Tag>;
        })}
      </TagList>
    </div>
    <UtilityList>
      {source && (
        <ExternalLinks href={source} target="_blank">
          <BsCodeSlash style={{marginRight: '7px'}}/>
          Source
        </ExternalLinks>
      )}
      {visit && (
        <ExternalLinks href={visit} target="_blank">
          <FiExternalLink style={{marginRight: '7px'}}/>
          Demo
        </ExternalLinks>
      )}
    </UtilityList>
  </Card>
}

export default ProjectCard;