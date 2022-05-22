import React from "react";
import judge from "../image/undraw_judge_katerina_limpitsouni_ny-1-q.svg";
import deal from "../image/undraw_business_deal_re_up4u.svg";
import ti from "../image/undraw_season_change_f99v.svg";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <div className="first">
        <div className="first-content">
          <div className="ImageShow">
            <img src={judge} />
          </div>
          <div className="Content">
            <h1> #Auction </h1>
          </div>
        </div>
      </div>
      <div className="second">
        <div className="second-content">
          <div className="Content">
            <h1>CONTENT</h1>
          </div>
          <div className="ImageShow">
            <img src={deal} />
          </div>
        </div>
      </div>
      <div className="first">
        <div className="first-content">
          <div className="ImageShow">
            <img src={ti} />
          </div>
          <div className="Content">
            <h1>CONTENT</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
