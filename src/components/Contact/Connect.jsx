import React from "react";
import './Connect.css'

export default function Connect() {
  return (
    <div className="connect">
      <p className="p1">Get In Touch</p>
      <p className="p2">Let's Make Some Magic Together</p>

      <div className="name">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
      </div>
      <input type="email" placeholder="Email Id" />
      <input type="text" placeholder="Contact Number" />
      <textarea
        name="message"
        cols="30"
        rows="5"
        placeholder="Message"
      ></textarea>

      <div className="opt">
        <input type="checkbox" className="check" id="check" />
        <label htmlFor="check">
          Want to have a video call with team or designer?
        </label>
      </div>

      <input type="submit" className="submit" value="Submit" />
    </div>
  );
}
