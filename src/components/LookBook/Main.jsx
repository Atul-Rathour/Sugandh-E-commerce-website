import React from 'react'
import './Main.css'
import img1 from '../../Assets/images/Collections/Kaftan/Sequence orange Rose kaftan.jpg';
import img2 from '../../Assets/images/Collections/Kaftan/Golden Rose Kaftan.jpg';
import img3 from '../../Assets/images/Collections/Kaftan/Steel blue Side Embroidery Kaftan.jpg';
import img4 from '../../Assets/images/Collections/Kaftan/Falling leaf peach kaftan.jpg';
import img5 from '../../Assets/images/Collections/Kaftan/Sequence wine Rose kaftan.jpg';


export default function Main() {

    const gallery = [img1, img2, img3, img4, img5]
  return (
    <div className="lookbook">

        {gallery.map((image, index) => (
            <div className="lookbook_item">
              <img className="img-zoom" src={image} alt="" />
              <h5 className="text-align-center">Image {index + 1}</h5>
            </div>
        ))}
   
  </div>

  )
}
