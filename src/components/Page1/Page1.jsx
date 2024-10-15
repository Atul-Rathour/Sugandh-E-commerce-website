import React from "react";
import './Page1.css'
import Gallery from "../Gallery/Gallery";
import G1 from "../../Assets/images/Home/page2 img3.jpg";
import G2 from "../../Assets/images/Home/page2 img2.jpg";
import G3 from "../../Assets/images/Home/page2 img1.jpg";
import G4 from "../../Assets/images/Home/page2 img4.png";
import G5 from "../../Assets/images/Home/page2 img5.jpg";
import G6 from "../../Assets/images/Home/page2 img6.jpg";

export default function Page1() {

  const arr = [G1, G2, G3, G4, G5, G6];

  return (
    <div id="page1">
      <div className="text-overlay">
        <p>
          "An enchanting fusion of creativity from rural and urban women has
          birthed a mesmerising collection, meticulously adorned with mirrors."
        </p>
      </div>



      <Gallery gallery={arr} />
    </div>
  );
}
