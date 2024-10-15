import React from "react";
import "./Page5.css";
import G1 from "../../Assets/images/Home/page6 img1.jpg";
import G2 from "../../Assets/images/Home/page6 img2.jpg";
import G3 from "../../Assets/images/Home/page6 img3.jpg";
import G4 from "../../Assets/images/Home/page6 img4.jpg";
import G5 from "../../Assets/images/Home/page6 img5.jpg";
import logo from "../../Assets/images/Home/page6 logo.png";

export default function Page5() {
  const arr = [G1, G2, G3, G4, G5];

  return (
    <div id="page5">
      <div className="content">
        <div className="img_overlay">
          <img src={logo} alt="" />
        </div>
        <span></span>

        <p className="p1">Celebrity's Choice</p>
        <p className="p2">Get your daily dose of style inspiration</p>
      </div>

      <div className="gallery">
        {arr.map((img, index) => (
          <div className="gallery_item" key={index}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
