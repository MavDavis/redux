import React from "react";
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
export default function Footer(){
    return <footer>
      <AiOutlineInstagram className="icon"/>
      <BsGithub className="icon"/>
      <AiFillFacebook className="icon"/>
      <AiOutlineTwitter className="icon"/>  
    </footer>
}