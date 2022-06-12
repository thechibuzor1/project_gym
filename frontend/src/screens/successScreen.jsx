import React from "react";
import img from "../pages/JoinUs/6.jpg";

function  Success() {
  return (
    <div className="success glow">
      <img className="img" src={img} alt="join" />
      <button className="success_btn">
        <span style={{ color: "white" }}>
          <h1>THANK YOU FOR SHOPPING WITH METAL VILLAGE.</h1>
          <h2>Your order will be delivered shortly.</h2>
        </span>
      </button>
    </div>
  );
}

export default Success;
