import React from "react";
import './Main.css'
import img1 from '../../Assets/images/Collections/AMPM/Dark Weaved Co-Ord Set.jpg';
import img2 from '../../Assets/images/Collections/Kaftan/Falling leaf peach kaftan.jpg';
import img3 from '../../Assets/images/Collections/Kaftan/Golden Rose Kaftan.jpg';
import img4 from '../../Assets/images/Collections/Kaftan/Bird Leaf kaftan.jpg';
import img5 from '../../Assets/images/Collections/IDA/Pastel Rose Top.jpg';
import img6 from '../../Assets/images/Collections/Kaftan/Sequence orange Rose kaftan.jpg';
import img7 from '../../Assets/images/Collections/Kaftan/Silver Rose Kaftan.jpg';
import img8 from '../../Assets/images/Collections/AMPM/Gloaming Pleated Dress.jpg';
import img9 from '../../Assets/images/Collections/Kaftan/Rust Side Embroidery Kaftan.jpg';
import img10 from '../../Assets/images/Collections/Kaftan/Aqua blue single rose kaftan.jpg';
import img11 from '../../Assets/images/Collections/IDA/Blush Dress.jpg';
import img12 from '../../Assets/images/Collections/IDA/Lavender Kurta Set.jpg';
import img13 from '../../Assets/images/Collections/IDA/Pale Mint dress.jpg';
import img14 from '../../Assets/images/Collections/IDA/Spring time ivory ensemble.jpg';
import img15 from '../../Assets/images/Collections/AMPM/Nightfall Belt Dreaa.jpg';
import img16 from '../../Assets/images/Collections/IDA/Tint top.jpg';
import img17 from '../../Assets/images/Collections/IDA/Wheaten Top.jpg';
import img18 from '../../Assets/images/Collections/Kaftan/Steel blue Side Embroidery Kaftan.jpg';
import img19 from '../../Assets/images/Collections/IDA/Vernal Spice Rust dress.jpg';


export default function Main() {
  const gallery = [
    {
      src: img1,
      name: "Dark Weaved Co-Ord Set",
      price: "₹ 9700",
    },
    {
      src: img2,
      name: "Falling leaf peach kaftan",
      price: "₹ 9500",
    },
    {
      src: img3,
      name: "Golden Rose Kaftan",
      price: "₹ 9500",
    },
    {
      src: img4,
      name: "Bird Leaf kaftan",
      price: "₹ 9500",
    },
    {
      src: img5,
      name: "Pastel Rose Top",
      price: "₹ 9500",
    },
    {
      src: img6,
      name: "Sequence orange Rose kaftan",
      price: "₹ 9500",
    },
    {
      src: img7,
      name: "Silver Rose Kaftan",
      price: "₹ 9500",
    },
    {
      src: img8,
      name: "Gloaming Pleated Dress",
      price: "₹ 9500",
    },
    {
      src: img9,
      name: "Rust Side Embroidery Kaftan",
      price: "₹ 9500",
    },
    {
      src: img10,
      name: "Aqua blue single rose kaftan",
      price: "₹ 9500",
    },
    {
      src: img11,
      name: "Blush Dress",
      price: "₹ 9500",
    },
    {
      src: img12,
      name: "Lavender Kurta Set",
      price: "₹ 9500",
    },
    {
      src: img13,
      name: "Pale Mint dress",
      price: "₹ 9500",
    },
    {
      src: img14,
      name: "Spring time ivory ensemble",
      price: "₹ 9500",
    },
    {
      src: img15,
      name: "Nightfall Belt Dress",
      price: "₹ 9500",
    },
    {
      src: img16,
      name: "Tint top",
      price: "₹ 9500",
    },
    {
      src: img17,
      name: "Wheaten Top",
      price: "₹ 9500",
    },
    {
      src: img18,
      name: "Steel blue Side Embroidery Kaftan",
      price: "₹ 9500",
    },
    {
      src: img19,
      name: "Vernal Spice Rust dress",
      price: "₹ 9500",
    },
  ];

  const collectionNames = [
    "Am:Pm",
    "Bahaar",
    "Dastaan",
    "Dastoor",
    "IDA",
    "Kaftan Edit",
    "Khayal",
    "Magic Hour",
    "Masakali",
    "Meraki",
    "Naaz",
    "Nazariya",
    "Ramo 2023",
    "Rozana",
    "Rozana 2.0",
    "Serene",
    "Shaam",
    "Tyohaar",
    "Udaan",
  ];

  return (
    <div className="main">

    <div className="row collec">

        {gallery.map((item, index) => {
            return (
                <div key={index} className="col-6 col-md-4 col-lg-3 mb-3">
                    <div className="card text-white seasons">
                        <div className="hover-overlay"></div>
                        <img src={item.src} className="card-img img-zoom" alt={item.name} />
                    </div>
                    <h5 className="text-align-center">{collectionNames[index]}</h5>
                </div>
            );
        })}
         
    </div>
    </div>

);
}
