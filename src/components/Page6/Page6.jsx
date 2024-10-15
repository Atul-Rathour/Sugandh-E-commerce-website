import React from "react";
import './Page6.css'
import img from '../../Assets/images/Home/page7 img1.png'

export default function Page6() {
  return (
    <div id="page6">
      <div className="img_overlay">
        <img src={img} alt="" />
      </div>

      <div className="content">
        <p className="p1">Get the look</p>
        <p className="p2">
          We accept custom orders and will be happy to make a piece <br />{" "}
          specially designed for you..
        </p>

        <div className="btn">
          <a href="#">Let's Talk</a>
        </div>
      </div>
    </div>
  );
}
