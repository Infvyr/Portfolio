import React, {useState} from 'react';
import { AnimatePresence, motion} from 'framer-motion';
import {
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

const variants = {
  pageInitial: {
    opacity: 0,
    scale: 0.5
  },
  pageAnimate: {
    opacity: 1,
    scale: 1
  },
  pageExit: {
    opacity: 0,
    scale: 0.5
  },
}

const ProjectCard = ({item}) => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const toggleModal = () => setIsOpen(!isOpen)

  const {title, description, tags, visit, source, image, imageWebp, images} = item

  return <AnimatePresence>
  <motion.article
      key={title}
      className="project-card"
      initial="pageInitial"
      animate="pageAnimate"
      variants={variants}
      transition={{ type: 'tween' }}>
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
        <ExternalLinks href={source} target="_blank" rel="noopener noreferrer">
          <BsCodeSlash style={{marginRight: '7px'}}/>
          Source
        </ExternalLinks>
      )}
      {visit && (
        <ExternalLinks href={visit} target="_blank" rel="noopener noreferrer">
          <FiExternalLink style={{marginRight: '7px'}}/>
          Demo
        </ExternalLinks>
      )}
    </UtilityList>
  </motion.article>
  </AnimatePresence>
}

export default ProjectCard;