import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";

const MainItem = ({ arr }) => {
  return (
    <div className="mainbox">
      <div className="divContainer">
        <h1>
          {arr[0].location.name}, {arr[0].location.country},
          {arr[0].location.tz_id}
        </h1>
        <h4>
          {arr[0].location.localtime}
          <AiOutlineClockCircle className="icons top" />
        </h4>
      </div>
      <div className="icon-box">
        <img src={arr[0].current.condition.icon} alt="weather icon" />
      </div>
    </div>
  );
};

export default MainItem;
