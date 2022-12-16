import React from "react";
import { CiLocationOn } from "react-icons/ci";
const Card = (props) => {
  const { ImageUrl, description, title, location, googleMapURL, startDate, EndDate } = props.item;
  return (
    <div className="card">
      <img src={ImageUrl} alt="" />
     
      <div className="flex">
      <div className="top ">
        <span  className=" ">
          <CiLocationOn className="icon"/>
        </span>
        <span className="span-icon">{location}</span>
        <a href={googleMapURL}>View on Google more</a>
      </div>
      <h1 className="">{title}</h1>
      <h5 className="">{startDate} - {EndDate}</h5>
      <p className="">{description}</p>
      </div>
    </div>
  );
};
export default Card;
 