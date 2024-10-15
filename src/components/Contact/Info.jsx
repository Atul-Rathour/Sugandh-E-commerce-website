import React from 'react';
import './Info.css'

export default function Info() {
  return (
    <div className="info">
      <p className="p1">Contact Info</p>
      <p className="p2">Sugandh Gupta</p>

      <div className="box">
        <div className="col-3 name">
          <p>Phone</p>
        </div>

        <div className="col-9">
          <p>+91 6352160172</p>
        </div>
      </div>
      
      <div className="box">
        <div className="col-3 name">
          <p>Email</p>
        </div>

        <div className="col-9">
          <p>worldOfSugandh@gmail.com</p>
        </div>
      </div>
      
      <div className="box">
        <div className="col-3 name">
          <p>Address</p>
        </div>

        <div className="col-9">
          <p>
            Rudra house <br />
            1st Floor, D-60 Kaliyabid <br />
            Bhavnagar <br />
            Gujarat -364001
          </p>
        </div>
      </div>
    </div>
  );
}
