import React, { useEffect, useState } from "react";
import Sort from "./Sort";
// import img1 from "../../Assets/images/Shop/Aqua blue single rose kaftan.jpg";
// import img2 from "../../Assets/images/Shop/Bird Leaf kaftan.jpg";
// import img3 from "../../Assets/images/Shop/Cut Embroidery kaftan.jpg";
// import img4 from "../../Assets/images/Shop/Cut Side Embroidery Kaftan.jpg";
// import img5 from "../../Assets/images/Shop/Falling leaf peach kaftan.jpg";
// import img6 from "../../Assets/images/Shop/Golden Rose Kaftan.jpg";
// import img7 from "../../Assets/images/Shop/Lilac Cut Embroidery kaftan.jpg";
// import img8 from "../../Assets/images/Shop/Olive Side Embroidery Kaftan.jpg";
// import img9 from "../../Assets/images/Shop/Pastel Rose Top.jpg";
// import img10 from "../../Assets/images/Shop/Red Side Embroidery Kaftan.jpg";
// import img11 from "../../Assets/images/Shop/Rozana.png";
// import img12 from "../../Assets/images/Shop/Rust Side Embroidery Kaftan.jpg";
// import img13 from "../../Assets/images/Shop/Sage Green dress.jpg";
// import img14 from "../../Assets/images/Shop/Sequence orange Rose kaftan.jpg";
// import img15 from "../../Assets/images/Shop/Sequence wine Rose kaftan.jpg";
// import img16 from "../../Assets/images/Shop/Silver Rose Kaftan.jpg";
import "./CSS/Display.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Display() {
  const [products, setProducts] = useState([]);
  /* const localItem = localStorage.getItem('sorting') */
  const [localItem] = useState(() => {
    return localStorage.getItem('sorting') || null;
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/products/");
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";
  console.log(products);
  const filteredGallery = products.filter((item) =>
    item.name.toLowerCase().includes(searchQuery)
  );

  const obj = [
    {
        "product_id": 1,
        "name": "Blue T-Shirt",
        "price": 1999,
        "category": "T-Shirts",
        "size": "L",
        "colour": "Blue",
        "fabric": "Cotton",
        "image": "http://127.0.0.1:8000/media/products/Aqua_blue_single_rose_kaftan.jpg",
        "description": "A comfortable blue t-shirt made of high-quality cotton."
    },
    {
        "product_id": 2,
        "name": "Red Dress",
        "price": 3499,
        "category": "Dresses",
        "size": "M",
        "colour": "Red",
        "fabric": "Silk",
        "image": "http://127.0.0.1:8000/media/products/Aqua_blue_single_rose_kaftan.jpg",
        "description": "An elegant red dress perfect for evening events."
    },
    {
        "product_id": 3,
        "name": "Green Hoodie",
        "price": 2999,
        "category": "Hoodies",
        "size": "XL",
        "colour": "Green",
        "fabric": "Fleece",
        "image": "http://127.0.0.1:8000/media/products/Aqua_blue_single_rose_kaftan.jpg",
        "description": "A warm and cozy green hoodie for the winter season."
    },
    {
        "product_id": 4,
        "name": "Yellow Summer Dress",
        "price": 2799,
        "category": "Dresses",
        "size": "S",
        "colour": "Yellow",
        "fabric": "Linen",
        "image": "http://127.0.0.1:8000/media/products/Aqua_blue_single_rose_kaftan.jpg",
        "description": "A bright yellow summer dress for a sunny day out."
    },
    {
        "product_id": 5,
        "name": "Black Jeans",
        "price": 2499,
        "category": "Jeans",
        "size": "32",
        "colour": "Black",
        "fabric": "Denim",
        "image": "http://127.0.0.1:8000/media/products/Aqua_blue_single_rose_kaftan.jpg",
        "description": "Classic black denim jeans with a slim fit."
    },
    {
        "product_id": 6,
        "name": "White Sneakers",
        "price": 3999,
        "category": "Shoes",
        "size": "9",
        "colour": "White",
        "fabric": "Leather",
        "image": "http://127.0.0.1:8000/media/products/Aqua_blue_single_rose_kaftan.jpg",
        "description": "Stylish white sneakers for everyday wear."
    },
    {
        "product_id": 7,
        "name": "Purple Scarf",
        "price": 999,
        "category": "Accessories",
        "size": "One Size",
        "colour": "Purple",
        "fabric": "Wool",
        "image": "http://127.0.0.1:8000/media/products/Aqua_blue_single_rose_kaftan.jpg",
        "description": "A soft purple scarf to keep you warm."
    }
]

  return (
    <div className="sec-2">
      <div className="imagery">
        <div className="col main-content shop-products-col">
          <div className="header d-flex justify-content-between align-items-center">
            <p className="p1" style={{ paddingTop: "7px" }}>
              <a href="/">Home</a> / <a href="/shop">Shop</a>
            </p>
            <div className="filter align-items-center d-none d-lg-flex">
              <p className="m-2">Filter</p>
              <Sort />
            </div>
          </div>
          <div>
            {/* Shorting */}
            <div className="row">
              {
              localItem != null  ? (
                obj.filter(cat => 
                  (cat.category === localItem) || 
                  (cat.size === localItem) || 
                  (cat.colour === localItem) || 
                  (cat.collection === localItem)).length > 0 ? (
                obj.filter(cat => 
                  (cat.category === localItem) || 
                  (cat.size === localItem)|| 
                  (cat.colour === localItem) || 
                  (cat.collection === localItem)).map((product, index) => (
                  <div className="col-6 col-sm-4 col-md-4 col-lg-4" key={index}>
                    <div className="img-div">
                      <img
                        src={product.image}
                        id={`img${index}`}
                        alt={product.name}
                        loading="lazy"
                      />
                      <div className="d_none">
                        <p>Quick View</p>
                      </div>
                    </div>
                    <div className="options mt-2 d-flex justify-content-between">
                      <p className="fs-9rem">{product.name}</p>
                      <p className="color-grey">₹ {product.price}</p>
                    </div>
                  </div>
                ))):(<p>Not Found</p>)
              ) : (<p></p>) }
              
              {(filteredGallery.length > 0 && localItem == null )  ? (
                filteredGallery.map((product, index) => (
                  <div className="col-6 col-sm-4 col-md-4 col-lg-4" key={index}>
                    <div className="img-div">
                      <img
                        src={product.src}
                        id={`img${index}`}
                        alt={product.name}
                        loading="lazy"
                      />
                      <div className="d_none">
                        <p>Quick View</p>
                      </div>
                    </div>
                    <div className="options mt-2 d-flex justify-content-between">
                      <p className="fs-9rem">{product.name}</p>
                      <p className="color-grey">₹ {product.price}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p></p>
              )}
            </div>
            <br />
            <div className="load-more">
              <button className="background-transparent">Load More</button>
            </div>
          </div>
        </div>
      </div>
      {localStorage.clear()}
    </div>    
  );
}
