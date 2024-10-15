import React from "react";

export default function Banner() {
  return (
    <div
      className="container-fluid text-white text-center banner"
      style={{ 
        backgroundColor: "darkcyan",
        position:'fixed',
        top : '0%',
        zIndex : '99',
        fontSize : ''
       }}
    >
      Join the Sugandh Family and avail 10% Discount on First Purchase.
    </div>
  );
}
