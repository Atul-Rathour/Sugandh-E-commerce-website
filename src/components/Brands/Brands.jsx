import React from "react";
import './Brands.css'
import UrbanLogo from '../../Assets/images/Home/Sugandh Urban Appereal Logo - Sugandh Gupta.29d61ee9cd59a156930e.png'
import GuptaLogo from '../../Assets/images/Home/Sugandh Gupta Logo Fashion Designer.cf5f1c4f1a00f25181fe.jpg'


export default function Brands() {
  return (
    <div id="Brands">
      <h1 className="text-overlay">Our Brands</h1>

      <div className="img-overlay">
        <div className="img1">
          <img
            src={UrbanLogo}
            alt=""
          />
          <h1>Sugandh Urban Apparels</h1>
        </div>
        <div className="img2">
          <img
            src={GuptaLogo}
            alt=""
          />
          <h1>Sugandh Gupta</h1>
        </div>
      </div>
    </div>
  );
}
