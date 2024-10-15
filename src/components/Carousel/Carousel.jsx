import React, { useEffect, useRef, useState } from "react";
import "./Carousel.css";
import img1 from "../../Assets/images/Home/carousel_1.jpg";
import img2 from "../../Assets/images/Home/carousel_2.jpg";
import img3 from "../../Assets/images/Home/carousel_3.png";
import img4 from "../../Assets/images/Home/carousel_4.jpg";

export default function Carousel() {
  const arr = [img1, img2, img3, img4];
  const [active, setActive] = useState(0);
  const sliderRef = useRef(null);
  const dotsRef = useRef([]);

  useEffect(() => {
    const slider = sliderRef.current;
    const items = slider.children;

    const reloadSlider = () => {
      slider.style.transition = "left 0.5s ease-in-out";
      slider.style.left = -items[active].offsetLeft + "px";

      // Remove the 'active' class from all dots and add it to the current active dot
      dotsRef.current.forEach((dot, index) => {
        dot.classList.toggle("active", index === active);
      });
    };

    reloadSlider(); // Call the function on active change

    // Auto-slide functionality
    const interval = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % arr.length);
    }, 3000);

    // Cleanup interval on component unmount or active change
    return () => clearInterval(interval);
  }, [active, arr.length]);

  return (
    <div id="carousel">
      <div className="slider">
        <div className="list" ref={sliderRef}>
          {arr.map((img, index) => (
            <div className="item" key={index}>
              <img src={img} alt={`Carousel Image ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="buttons">
          <button
            id="prev"
            onClick={() => setActive((active - 1 + arr.length) % arr.length)}
          >
            {"<"}
          </button>
          <button
            id="next"
            onClick={() => setActive((active + 1) % arr.length)}
          >
            {">"}
          </button>
        </div>
        <ul className="dots">
          {arr.map((_, index) => (
            <li
              key={index}
              ref={(el) => (dotsRef.current[index] = el)}
              className={index === active ? "active" : ""}
              onClick={() => setActive(index)}
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
