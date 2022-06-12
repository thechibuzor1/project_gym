import React from "react";
import image from "./5.jpg";
import image1 from "./3.jpg";
import { Helmet } from "react-helmet-async";
import { useNavigate, Link } from "react-router-dom";

function Packages() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Join Us </title>
      </Helmet>
      <div style={{ width: "100%" }}>
        <Link to="/Explore">
          <div className="join">
            <img className="img1" src={image} alt="join" />
            <button
              className="head_btn1"
              onClick={() => {
                navigate("/Explore");
              }}
            >
              <span style={{ color: "white" }}>
                <b>Explore</b>
              </span>
            </button>
          </div>
        </Link>

        <Link to="/ShopApp">
          <div className="join1">
            <img className="img2" src={image1} alt="join" />
            <button
              className="head_btn2"
              onClick={() => {
                navigate("/ShopApp");
              }}
            >
              <span style={{ color: "white" }}>
                <b>Shop Equipments</b>
              </span>
            </button>
          </div>
        </Link>
      </div>

      <footer className="join_bn">
        <h1 style={{ color: "red" }}> OUR LOCATION: </h1>
        <h2 style={{ color: "white" }}>
          <p>
            <b>ADDRESS: </b> Lagos State,Nigeria.
          </p>

          <p>
            <b>Developer: </b>
            <a href="https://api.whatsapp.com/send?phone=2348141609349">
              WhatsApp
            </a>
            , <a href="mailto:chibuzorm26@mail.com">Send an email</a>{" "}
          </p>
        </h2>
      </footer>
    </>
  );
}

export default Packages;
