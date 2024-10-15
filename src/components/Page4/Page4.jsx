import React from 'react'
import './Page4.css'
import Gallery from '../Gallery/Gallery'
import G1 from "../../Assets/images/Home/page5 img1.jpg";
import G2 from "../../Assets/images/Home/page5 img2.jpg";
import G3 from "../../Assets/images/Home/page5 img3.jpg";
import G4 from "../../Assets/images/Home/page5 img4.jpg";
import G5 from "../../Assets/images/Home/page5 img5.jpg";
import G6 from "../../Assets/images/Home/page5 img6.jpg";


export default function Page4() {
    const arr = [G1, G2, G3, G4, G5, G6];

  return (
<div id="page4">
    <div className="content">
      <div className="btn">
        <a href="#">Featured</a>
      </div>

      <p className="p1">
        Look Book
      </p>
      <p className="p2">
        Our latest collections are ready for you <br/> to have a look
      </p>
      <p className="p3">
        All Looks
      </p>
    </div>

    <Gallery gallery={arr} />

   
  </div>
  )
}
