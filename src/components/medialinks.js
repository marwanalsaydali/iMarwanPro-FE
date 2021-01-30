import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const MediaLinks = () => {
  return (
    <div className="media-links">
      <AiFillGithub />
      <AiFillLinkedin />
      <AiOutlineMail />
      <AiOutlineInstagram />
      <AiOutlineTwitter />
    </div>
  );
};

export default MediaLinks;
