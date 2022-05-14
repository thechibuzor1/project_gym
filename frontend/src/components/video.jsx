import React from "react";
import video1 from "../video/1.mp4";
import video2 from "../video/2.mp4";
import video3 from "../video/3.mp4";
import video4 from "../video/4.mp4";
import video6 from "../video/6.mp4";
import video7 from "../video/7.mp4";
import video8 from "../video/8.mp4";
import video9 from "../video/9.mp4";
import video10 from "../video/10.mp4";
import video11 from "../video/11.mp4";
import video12 from "../video/12.mp4";
import video13 from "../video/13.mp4";
import { useNavigate } from "react-router-dom";

function Video() {
  let navigate = useNavigate();
  return (
    <div className="video">
      <h1 style={{color: "green"}}>EXPLORE EVAACTIVE</h1>
      <video width="320" height="240" controls>
        <source src={video1} />
      </video>
      <video width="320" height="240" controls>
        <source src={video2} />
      </video>
      <video width="320" height="240" controls>
        <source src={video3} />
      </video>
      <video width="320" height="240" controls>
        <source src={video4} />
      </video>
      <video width="320" height="240" controls>
        <source src={video6} />
      </video>
      <video width="320" height="240" controls>
        <source src={video7} />
      </video>
      <video width="320" height="240" controls>
        <source src={video8} />
      </video>
      <video width="320" height="240" controls>
        <source src={video9} />
      </video>
      <video width="320" height="240" controls>
        <source src={video10} />
      </video>
      <video width="320" height="240" controls>
        <source src={video11} />
      </video>
      <video width="320" height="240" controls>
        <source src={video12} />
      </video>
      <video width="320" height="240" controls>
        <source src={video13} />
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
