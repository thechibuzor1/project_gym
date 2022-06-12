import React from "react";
import video1 from "../video/1.mp4";
 
import { useNavigate } from "react-router-dom";

function Video() {
  let navigate = useNavigate();
  return (
    <div className="video">
      <h1 style={{color: "red"}}>EXPLORE</h1>
      <video width="320" height="240" controls>
        <source src={video1} />
      </video>
       
      <div className="vid_button">
        <button
          className="vid_btn"
          onClick={() => {
            navigate("/Explore");
          }}
        >
          <b>VIEW MORE</b>
        </button>
      </div>
    </div>
  );
}
export default Video;
