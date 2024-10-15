import React from "react";
import blogImg1 from "../../Assets/images/Blog/blog.jpg";
import blogImg2 from "../../Assets/images/Blog/blog1.jpg";
import blogImg3 from "../../Assets/images/Blog/blog2.jpg";
import blogImg4 from "../../Assets/images/Blog/blog3.jpg";
import blogImg5 from "../../Assets/images/Blog/blog4.jpg";
import blogImg6 from "../../Assets/images/Blog/blog5.jpg";
import blogImg7 from "../../Assets/images/Blog/blog6.jpg";
import './Main.css'
export default function Main() {
  const gallery = [
    blogImg1,
    blogImg2,
    blogImg3,
    blogImg4,
    blogImg5,
    blogImg6,
    blogImg7,
  ];
  return (
    <div>
      <div className="blog">
        {gallery.map((image, index) => (
          <div className="blog_item" key={index}>
            <img className="img-zoom" src={image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
