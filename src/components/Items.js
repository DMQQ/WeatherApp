import React, { useState } from "react";
import { RiCelsiusFill } from "react-icons/ri";
import { WiStrongWind } from "react-icons/wi";
import { BiDirections, BiChevronDown, BiChevronUp } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";

const Items = ({ arr, arr2 }) => {
  return (
    <div>
      {arr.map((e) => {
        return (
          <div key={e.name}>
            <p className="desc">
              Weather description: <span>{e.condition.text}</span>
            </p>
            <p>
              Temperature:
              <span>
                {" "}
                {e.temp_c}
                <RiCelsiusFill className="icons" />
              </span>
            </p>

            <p>
              Feels Like temp:
              <span>
                {" "}
                {e.feelslike_c}
                <RiCelsiusFill className="icons" />
                <ShowMore data={arr2} />
              </span>
            </p>
            <p>
              wind speed:
              <span>
                {" "}
                {e.wind_kph} km/h <WiStrongWind className="icons" />
              </span>
            </p>
            <p>
              wind direction:
              <span>
                {" "}
                {e.wind_dir} <BiDirections className="icons" />
              </span>
            </p>
            <p>
              last updated:
              <span>
                {" "}
                {e.last_updated} <AiOutlineClockCircle className="icons" />
              </span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

const ShowMore = ({ data }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)} className="bichevrondown">
        {show ? <BiChevronDown /> : <BiChevronUp />}
      </button>
      {show ? (
        <SubItem text="Feels like temp" data1={data[0].current.feelslike_f} />
      ) : null}
    </div>
  );
};

const SubItem = ({ text, data1 }) => {
  return (
    <div>
      <span style={{ color: "white" }}>{text}:</span> <span>{data1}*F</span>
    </div>
  );
};

export default Items;
