import React from "react";
import myImg from "../assets/my-img.jfif";
import { MdOutgoingMail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";

export default function Info() {
  return (
    <div className="Info">
      <img src={myImg} alt="my profile Image" />
      <div>
        <h3>Davids Marvelous</h3>
        <p>Frontend developer</p>
        <p>contact me</p>
      </div>
      <div className="buttonDiv">
        <button>
          <a href="mailto:mavdavis@gmail.com" target="_blank">
            <span>
              <MdOutgoingMail />
            </span>
            Email
          </a>
        </button>
        <button className="btn">
          <a href="https://github.com/Mavdavis" target="_blank">
            <span>
              {" "}
              <BsGithub className="icon" />
            </span>
            Github
          </a>
        </button>
      </div>
    </div>
  );
}
