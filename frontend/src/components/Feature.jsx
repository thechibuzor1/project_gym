import React from "react";
import Featurebox from "./Featurebox";
import f1image from "../images/1.svg";
import f2image from "../images/2.svg";
import f3image from "../images/3.svg";
import f4image from "../images/4.svg";

function Feature() {
  return (
    <div id="features">
      <h1>Features</h1>
      <div className="a-container">
        <Featurebox image={f1image} title="WeightLifting" />
        <Featurebox image={f2image} title="Specific Muscle" />
        <Featurebox image={f3image} title="Flex Your Muscle" />
        <Featurebox image={f4image} title="Cardio Exercise" />
      </div>
    </div>
  );
}

export default Feature;
