import React from "react";
import { IData } from "../data";
import "../style/Hexagon.css";

interface IHexagon {
  data: IData;
  active: number;
  index: number;
}

function Hexagon({ data, active, index }: IHexagon) {
  return (
    <div className="box">
      <div className="hexagon">
        <div className="content">
          {active === index ? (
            <>
              <div className="title-place">Cтадион</div>
              <div className="title-data">26 Июня</div>
              <div className="title-time">19:00</div>
              <button className="title-button">Купить билеты</button>
            </>
          ) : (
            <>
              <div className="title-data">26 </div>
              <div className="title-data"> Июня</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hexagon;
