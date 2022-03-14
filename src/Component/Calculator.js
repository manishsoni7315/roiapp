import React from "react";
import closeIcon from "../assets/close.png";
import pen from "../assets/pen.png";
import { useState } from "react";

export default function Calculator() {
  const [show, setShow] = useState(false);
  return (
    <div className="app_container">
      <div className="app_header">
        <h3 className="header_title">Calculator</h3>
        <img src={closeIcon} alt="close_icon" />
      </div>
      <div className="currency_section">
        <p>Cake</p>
        <div className="switch_btn">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          USD
        </div>
      </div>
      <p className="price_section">
        <b>2.10000 CAKE</b>
      </p>
      <div className="balance_section">
        <ul>
          <li className="actives">USE BALANCE</li>
          <li> $1000</li>
          <li> $100</li>
        </ul>
        <span>-$22.93</span>
      </div>
      <div className="timeframe_section ">
        <h4>
          {" "}
          <b>Time Frame</b>
        </h4>
        <ul>
          <li className="timeframe_section_actives">1 Day</li>
          <li>7 Days</li>
          <li>30 Days</li>
          <li>1 Year</li>
          <li>5 Years</li>
        </ul>
      </div>
      <div className="timeframe_section">
        <div className="accelerated_header">
          <h4>Enable Accelerated APY </h4>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
        <p>Select Tier</p>
        <ul>
          <li>Tier 1</li>
          <li>Tier 2</li>
          <li>Tier 3</li>
          <li className="timeframe_section_actives">Tier 4</li>
          <li>Tier 5</li>
        </ul>
      </div>
      <p className="roi_current_rate_container">
        <p className="roi_title">
          {" "}
          <small>
            {" "}
            <b>ROI at Current Rates</b>{" "}
          </small>
        </p>
        <div className="roi_current_rate">
          <img src={pen} />
          <b>2.10000 CAKE</b>
        </div>
        <p className="roi_title">
          {" "}
          <small>
            <b> ~ 3CAKE + 10 DON</b>
          </small>
        </p>
      </p>
      <div className="action">
        <button className="action_btn1">Apply</button>
        <button className="action_btn2">Cancel</button>
      </div>
      <p
        className="text-center"
        onClick={() => {
          setShow(!show);
        }}
      >
        {show == false ? "Show Details" : "Hide Details"}
      </p>
      {show == true ? (
        <div>
          <div className="d-flex justify-content-between">
            <p>APY</p>
            <p>63.34%</p>
          </div>
          <div>
            <ul className="details_text">
              <li>Calculated based on current rates </li>
              <li>
                All fugures are estimates provided for your convenience only,
                and by no means reqresent guaranted return.
              </li>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
