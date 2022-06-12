import React, { useState } from "react";
import "./Media.css";
import CloseIcon from "@mui/icons-material/Close";
import img1 from "./pic/1.jpg";
import img2 from "./pic/2.jpg";
import img3 from "./pic/3.jpg";
import img4 from "./pic/4.jpg";
import img5 from "./pic/5.jpg";
import img6 from "./pic/6.jpg"
import { Helmet } from "react-helmet-async";

function Media() {
  let data = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 5,
      imgSrc: img5,
    },
    {
      id: 6,
      imgSrc: img6,
    },
  ];
  const [model, setModel] = useState(false);
  const [tempimgSrc, SetTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    SetTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <Helmet>
        <title>Explore</title>
      </Helmet>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} />
        <CloseIcon onClick={() => setModel(false)} />
      </div>

      <div className="media">
        {data.map((item, index) => {
          return (
            <div
              className="Pictures"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Media;
