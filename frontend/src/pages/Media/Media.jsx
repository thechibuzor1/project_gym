import React, { useState } from "react";
import "./Media.css";
import CloseIcon from "@mui/icons-material/Close";
import img1 from "./evaactivelife/1.jpg";
import img2 from "./evaactivelife/2.jpg";
import img3 from "./evaactivelife/3.jpg";
import img4 from "./evaactivelife/4.jpg";
import img5 from "./evaactivelife/5.jpg";
import img6 from "./evaactivelife/6.jpg";
import img7 from "./evaactivelife/7.jpg";
import img8 from "./evaactivelife/8.jpg";
import img9 from "./evaactivelife/9.jpg";
import img10 from "./evaactivelife/10.jpg";
import img11 from "./evaactivelife/11.jpg";
import img12 from "./evaactivelife/12.jpg";
import img13 from "./evaactivelife/13.jpg";
import img14 from "./evaactivelife/14.jpg";
import img15 from "./evaactivelife/15.jpg";
import img16 from "./evaactivelife/16.jpg";
import img17 from "./evaactivelife/17.jpg";
import img18 from "./evaactivelife/18.jpg";
import img19 from "./evaactivelife/19.jpg";
import img20 from "./evaactivelife/20.jpg";
import img21 from "./evaactivelife/21.jpg";
import img22 from "./evaactivelife/22.jpg";
import img23 from "./evaactivelife/23.jpg";
import img24 from "./evaactivelife/24.jpg";
import img25 from "./evaactivelife/25.jpg";
import img26 from "./evaactivelife/26.jpg";
import img27 from "./evaactivelife/27.jpg";
import img28 from "./evaactivelife/28.jpg";
import img29 from "./evaactivelife/29.jpg";
import img30 from "./evaactivelife/30.jpg";
import img31 from "./evaactivelife/31.jpg";
import img32 from "./evaactivelife/32.jpg";
import img33 from "./evaactivelife/33.jpg";
import img34 from "./evaactivelife/34.jpg";
import img35 from "./evaactivelife/35.jpg";
import img36 from "./evaactivelife/36.jpg";
import img37 from "./evaactivelife/37.jpg";
import img38 from "./evaactivelife/38.jpg";
import img39 from "./evaactivelife/39.jpg";
import img40 from "./evaactivelife/40.jpg";
import img41 from "./evaactivelife/41.jpg";
import img42 from "./evaactivelife/42.jpg";
import img43 from "./evaactivelife/43.jpg";
import img44 from "./evaactivelife/44.jpg";
import img45 from "./evaactivelife/45.jpg";
import img46 from "./evaactivelife/46.jpg";
import img47 from "./evaactivelife/47.jpg";
import img48 from "./evaactivelife/48.jpg";
import img49 from "./evaactivelife/49.jpg";
import img50 from "./evaactivelife/50.jpg";
import img51 from "./evaactivelife/51.jpg";
import img52 from "./evaactivelife/52.jpg";
import img53 from "./evaactivelife/53.jpg";
import img54 from "./evaactivelife/54.jpg";
import img55 from "./evaactivelife/55.jpg";
import img56 from "./evaactivelife/56.jpg";
import img57 from "./evaactivelife/57.jpg";
import img58 from "./evaactivelife/58.jpg";
import img59 from "./evaactivelife/59.jpg";
import img60 from "./evaactivelife/60.jpg";
import img61 from "./evaactivelife/61.jpg";
import img62 from "./evaactivelife/62.jpg";
import img63 from "./evaactivelife/63.jpg";
import img64 from "./evaactivelife/64.jpg";
import img65 from "./evaactivelife/65.jpg";
import img66 from "./evaactivelife/66.jpg";
import img67 from "./evaactivelife/67.jpg";
import img68 from "./evaactivelife/68.jpg";
import img69 from "./evaactivelife/69.jpg";
import img70 from "./evaactivelife/70.jpg";
import img71 from "./evaactivelife/71.jpg";
import img72 from "./evaactivelife/72.jpg";
import img73 from "./evaactivelife/73.jpg";
import img74 from "./evaactivelife/74.jpg";
import img75 from "./evaactivelife/75.jpg";
import img76 from "./evaactivelife/76.jpg";
import img77 from "./evaactivelife/77.jpg";
import img78 from "./evaactivelife/78.jpg";
import img79 from "./evaactivelife/79.jpg";
import img80 from "./evaactivelife/80.jpg";
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
    {
      id: 7,
      imgSrc: img7,
    },
    {
      id: 8,
      imgSrc: img8,
    },
    {
      id: 9,
      imgSrc: img9,
    },
    {
      id: 10,
      imgSrc: img10,
    },
    {
      id: 11,
      imgSrc: img11,
    },
    {
      id: 12,
      imgSrc: img12,
    },
    {
      id: 13,
      imgSrc: img13,
    },
    {
      id: 14,
      imgSrc: img14,
    },
    {
      id: 15,
      imgSrc: img15,
    },
    {
      id: 16,
      imgSrc: img16,
    },
    {
      id: 17,
      imgSrc: img17,
    },
    {
      id: 18,
      imgSrc: img18,
    },
    {
      id: 19,
      imgSrc: img19,
    },
    {
      id: 20,
      imgSrc: img20,
    },
    {
      id: 21,
      imgSrc: img21,
    },
    {
      id: 22,
      imgSrc: img22,
    },
    {
      id: 23,
      imgSrc: img23,
    },
    {
      id: 24,
      imgSrc: img24,
    },
    {
      id: 25,
      imgSrc: img25,
    },
    {
      id: 26,
      imgSrc: img26,
    },
    {
      id: 27,
      imgSrc: img27,
    },
    {
      id: 28,
      imgSrc: img28,
    },
    {
      id: 29,
      imgSrc: img29,
    },
    {
      id: 30,
      imgSrc: img30,
    },
    {
      id: 31,
      imgSrc: img31,
    },
    {
      id: 32,
      imgSrc: img32,
    },
    {
      id: 33,
      imgSrc: img33,
    },
    {
      id: 34,
      imgSrc: img34,
    },
    {
      id: 35,
      imgSrc: img35,
    },
    {
      id: 36,
      imgSrc: img36,
    },
    {
      id: 37,
      imgSrc: img37,
    },
    {
      id: 38,
      imgSrc: img38,
    },
    {
      id: 39,
      imgSrc: img39,
    },
    {
      id: 40,
      imgSrc: img40,
    },
    {
      id: 41,
      imgSrc: img41,
    },
    {
      id: 42,
      imgSrc: img42,
    },
    {
      id: 43,
      imgSrc: img43,
    },
    {
      id: 44,
      imgSrc: img44,
    },
    {
      id: 45,
      imgSrc: img45,
    },
    {
      id: 46,
      imgSrc: img46,
    },
    {
      id: 47,
      imgSrc: img47,
    },
    {
      id: 48,
      imgSrc: img48,
    },
    {
      id: 49,
      imgSrc: img49,
    },
    {
      id: 50,
      imgSrc: img50,
    },
    {
      id: 51,
      imgSrc: img51,
    },
    {
      id: 52,
      imgSrc: img52,
    },
    {
      id: 53,
      imgSrc: img53,
    },
    {
      id: 54,
      imgSrc: img54,
    },
    {
      id: 55,
      imgSrc: img55,
    },
    {
      id: 56,
      imgSrc: img56,
    },
    {
      id: 57,
      imgSrc: img57,
    },
    {
      id: 58,
      imgSrc: img58,
    },
    {
      id: 59,
      imgSrc: img59,
    },
    {
      id: 60,
      imgSrc: img60,
    },
    {
      id: 61,
      imgSrc: img61,
    },
    {
      id: 62,
      imgSrc: img62,
    },
    {
      id: 63,
      imgSrc: img63,
    },
    {
      id: 64,
      imgSrc: img64,
    },
    {
      id: 65,
      imgSrc: img65,
    },
    {
      id: 66,
      imgSrc: img66,
    },
    {
      id: 67,
      imgSrc: img67,
    },
    {
      id: 68,
      imgSrc: img68,
    },
    {
      id: 69,
      imgSrc: img69,
    },
    {
      id: 70,
      imgSrc: img70,
    },
    {
      id: 71,
      imgSrc: img71,
    },
    {
      id: 72,
      imgSrc: img72,
    },
    {
      id: 72,
      imgSrc: img72,
    },
    {
      id: 73,
      imgSrc: img73,
    },
    {
      id: 74,
      imgSrc: img74,
    },
    {
      id: 75,
      imgSrc: img75,
    },
    {
      id: 76,
      imgSrc: img76,
    },
    {
      id: 77,
      imgSrc: img77,
    },
    {
      id: 78,
      imgSrc: img78,
    },
    {
      id: 79,
      imgSrc: img79,
    },
    {
      id: 80,
      imgSrc: img80,
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
