import React from "react";
import './Page2.css'
import Gallery from "../Gallery/Gallery";
import G1 from "../../Assets/images/Home/page3 img1.jpg";
import G2 from "../../Assets/images/Home/page3 img2.jpg";
import G3 from "../../Assets/images/Home/page3 img3.jpg";
import G4 from "../../Assets/images/Home/page3 img4.jpg";
import G5 from "../../Assets/images/Home/page3 img5.jpg";
import G6 from "../../Assets/images/Home/page3 img6.jpg";

export default function Page2() {
  const arr = [G1, G2, G3, G4, G5, G6];

  return (
    <div id='page2'>
    <div className="text-overlay">
      <p className="p1">Embracing culture</p>
      <p className="p2">
        "Fashion is art, culture and comfort. We at WOS, create perfect art for
        you along with designs that embrace our culture and heritage at its best
        keeping in mind the comfort of every woman in the society. "
      </p>
    </div>

    <Gallery gallery={arr}/>
    </div>
  );
}
