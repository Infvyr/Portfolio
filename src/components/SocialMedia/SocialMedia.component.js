import {SocialContainer, SocialIcons} from "./SocialMedia.styles";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import {CgMail} from "react-icons/cg";

export default function SocialMedia({inFooter}) {
  return (
    <SocialContainer inFooter={inFooter}>
      <SocialIcons
        href="https://github.com"
        title="Visit my github profile"
        target="_blank"
        rel="noopener noreferrer">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/"
        title="Contact me on LinkedIn"
        target="_blank"
        rel="noopener noreferrer">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons
        href="mailto://mail@domain.com"
        title="Send directly an email"
        target="_blank"
        rel="noopener noreferrer">
        <CgMail size="3rem"/>
      </SocialIcons>
    </SocialContainer>
  )}