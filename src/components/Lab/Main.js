import React from "react";

export default function Main() {
  function address(ref, city) {
    let head = document.getElementById("p1");
    let body = document.getElementById("p2");

    let item = document.getElementsByClassName("items");

    for (let i = 0; i < item.length; i++) {
      console.log(item[i]);
      if (item[i] != ref) {
        // console.log('change')
        item[i].style.backgroundColor = "white";
        item[i].style.color = "black";
      }
    }
    ref.style.color = "white";
    ref.style.backgroundColor = "black";
    if (city == "flagship") {
      head.textContent = "Rudra House";
      body.textContent =
        "1st floor, D-60 Kaliyabid, Bhavangar, Gujarat - 364002.";
    }
    if (city == "ahmedabad") {
      head.textContent = "House Of Mohini";
      body.textContent =
        "Shop no.4, Indraprastha Corporate, Opposite to Shell Petrol Pump, Chinar Bungalows, Prahlad Nagar, Ahmedabad, Gujarat-380015.";
    }
    if (city == "surat") {
      head.textContent = "Saanja";
      body.textContent =
        "Besides Agrawal Vidhya, Vihar School, Canal Rd, Vesu, Surat, Gujarat-395007.";
    }
    if (city == "rajkot") {
      head.textContent = "House of Shivani";
      body.textContent =
        "Flat, vidhyakunj society, Business Centrum, 07, main road, Amin Marg, opp. Kings Height, Rajkot, Gujarat-360001.";
    }
    if (city == "mumbai") {
      head.textContent = "Mogra";
      body.textContent =
        "T-3 Palldium, Level 3, Phoenix Palladium, S.B Marg, Lower Parel (w), Mumbai, Maharashtra-400013.";
    }
    if (city == "secunderabad") {
      head.textContent = "Taruni";
      body.textContent =
        "2-1-178, Kandoji Bazar General Bazaar, Kalasiguda, Secunderabad.";
    }
    if (city == "delhi") {
      head.textContent = "Agashe";
      body.textContent =
        "Metro Station Ghitorni, 845, Ground & First Floor, Mehrauli-Gurgaon Rd, opposite Metro Pillar - 112, near Ghitorni, Ghitorni, New Delhi, Delhi-110030.";
    }
    if (city == "varanasi") {
      head.textContent = "Gazal Agrawal";
      body.textContent =
        "D59/105-C, Chandrika Nagar Colony, Sigra, Varanasi, Uttar Pradesh - 221010.";
    }
  }

  document.addEventListener("click", function (event) {
    const clickedElement = event.target;
    if (!clickedElement.classList.contains("list")) {
      const boxes = document.querySelectorAll(".list");
      boxes.forEach((box) => {
        box.style.backgroundColor = "white";
        box.style.color = "black";
      });
    }
  });

  return (
    <div>
      <div id="carousel">
        <div className="slider">
          <div className="list">
            <div className="item">
              <img src="/images/carousel_1.jpg" alt="Carousel Image 1" />
            </div>
            <div className="item">
              <img src="/images/carousel_2.jpg" alt="Carousel Image 2" />
            </div>
            <div className="item">
              <img src="/images/carousel_3.png" alt="Carousel Image 3" />
            </div>
            <div className="item">
              <img src="/images/carousel_4.jpg" alt="Carousel Image 4" />
            </div>
          </div>
          <div className="buttons">
            <button id="prev">{"<"}</button>
            <button id="next">{">"}</button>
          </div>
          <ul className="dots">
            <li className="active"></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>

      <div id="page1">
        <h1 className="text-overlay">Our Brands</h1>
        <div className="img-overlay">
          <div className="img1">
            <img
              src="/images/Sugandh Urban Appereal Logo - Sugandh Gupta.29d61ee9cd59a156930e.png"
              alt="Sugandh Urban Apparels Logo"
            />
            <h1>Sugandh Urban Apparels</h1>
          </div>
          <div className="img2">
            <img
              src="/images/Sugandh Gupta Logo Fashion Designer.cf5f1c4f1a00f25181fe.jpg"
              alt="Sugandh Gupta Logo"
            />
            <h1>Sugandh Gupta</h1>
          </div>
        </div>
      </div>

      <div id="page2">
        <div className="text-overlay">
          <p>
            "An enchanting fusion of creativity from rural and urban women has
            birthed a mesmerising collection, meticulously adorned with
            mirrors."
          </p>
        </div>
        <div className="gallery">
          <figure className="gallery__item gallery__item--1">
            <img
              src="/images/page2 img3.jpg"
              className="gallery__img img-zoom"
              alt="Gallery Image 1"
            />
          </figure>
          <figure className="gallery__item gallery__item--2">
            <img
              src="/images/page2 img2.jpg"
              className="gallery__img img-zoom"
              alt="Gallery Image 2"
            />
          </figure>
          <figure className="gallery__item gallery__item--3">
            <img
              src="/images/page2 img1.jpg"
              className="gallery__img img-zoom"
              alt="Gallery Image 3"
            />
          </figure>
          <figure className="gallery__item gallery__item--4">
            <img
              src="/images/page2 img4.png"
              className="gallery__img img-zoom"
              alt="Gallery Image 4"
            />
          </figure>
          <figure className="gallery__item gallery__item--5">
            <img
              src="/images/page2 img5.jpg"
              className="gallery__img img-zoom"
              alt="Gallery Image 5"
            />
          </figure>
          <figure className="gallery__item gallery__item--6">
            <img
              src="/images/page2 img6.jpg"
              className="gallery__img img-zoom"
              alt="Gallery Image 6"
            />
          </figure>
        </div>
      </div>

      <div id="page3">
        <div className="text-overlay">
          <p className="p1">Embracing culture</p>
          <p className="p2">
            "Fashion is art, culture and comfort. We at WOS, create perfect art
            for you along with designs that embrace our culture and heritage at
            its best keeping in mind the comfort of every woman in the society."
          </p>
        </div>
        <div className="gallery">
          <figure className="gallery__item gallery__item--1">
            <img
              src="/images/page3 img1.jpg"
              className="gallery__img img-zoom"
              alt="Gallery Image 1"
            />
          </figure>
          <figure className="gallery__item gallery__item--2">
            <img
              src="/images/page3 img2.jpg"
              className="gallery__img img-zoom"
              alt="Gallery Image 2"
            />
          </figure>
          <figure className="gallery__item gallery__item--3">
            <img
              src="/images/page3 img3.jpg"
              className="gallery__img img-zoom"
              alt="Gallery Image 3"
            />
          </figure>
          <figure className="gallery__item gallery__item--4">
            <img
              src="/images/page3 img4.jpg"
              className="gallery__img img-zoom"
              alt="Gallery Image 4"
            />
          </figure>
          <figure className="gallery__item gallery__item--5">
            <img
              src="/images/page3 img5.jpg"
              className="gallery__img img-zoom"
              alt="Gallery Image 5"
            />
          </figure>
          <figure className="gallery__item gallery__item--6">
            <img
              src="/images/page3 img6.jpg"
              className="gallery__img img-zoom"
              alt="Gallery Image 6"
            />
          </figure>
        </div>
      </div>

      <div id="page4">
        <div className="center-img">
          <img src="/images/page4 img1.png" alt="Center Image" />
        </div>
        <div className="left_img"></div>
      </div>

      <div id="page5">
        <div className="content">
          <div className="btn">
            <a href="#">Featured</a>
          </div>
          <p className="p1">Look Book</p>
          <p className="p2">
            Our latest collections are ready for you <br /> to have a look
          </p>
          <p className="p3">All Looks</p>
        </div>
        <div className="gallery">
          <figure className="gallery__item gallery__item--1">
            <img
              src="/images/page5 img1.jpg"
              className="gallery__img img-zoom"
              alt="Gallery Image 1"
            />
          </figure>
          <figure className="gallery__item gallery__item--2">
            <img
              src="/images/page5 img2.jpg"
              className="gallery__img img-zoom"
              alt="Gallery Image 2"
            />
          </figure>
          <figure className="gallery__item gallery__item--3">
            <img
              src="/images/page5 img3.jpg"
              className="gallery__img img-zoom"
              alt="Gallery Image 3"
            />
          </figure>
          <figure className="gallery__item gallery__item--4">
            <img
              src="/images/page5 img4.jpg"
              className="gallery__img img-zoom"
              alt="Gallery Image 4"
            />
          </figure>
          <figure className="gallery__item gallery__item--5">
            <img
              src="/images/page5 img5.jpg"
              className="gallery__img img-zoom"
              alt="Gallery Image 5"
            />
          </figure>
          <figure className="gallery__item gallery__item--6">
            <img
              src="/images/page5 img6.jpg"
              className="gallery__img img-zoom"
              alt="Gallery Image 6"
            />
          </figure>
        </div>
      </div>

      <div id="page6">
        <div className="content">
          <div className="img_overlay">
            <img src="/images/page6 logo.png" alt="Page 6 Logo" />
          </div>
          <span></span>
          <p className="p1">Celebrity's Choice</p>
          <p className="p2">Get your daily dose of style inspiration</p>
        </div>
        <div className="gallery">
          <div className="gallery_item">
            <img src="/images/page6 img1.jpg" alt="Gallery Image 1" />
          </div>
          <div className="gallery_item">
            <img src="/images/page6 img2.jpg" alt="Gallery Image 2" />
          </div>
          <div className="gallery_item">
            <img src="/images/page6 img3.jpg" alt="Gallery Image 3" />
          </div>
          <div className="gallery_item">
            <img src="/images/page6 img4.jpg" alt="Gallery Image 4" />
          </div>
          <div className="gallery_item">
            <img src="/images/page6 img5.jpg" alt="Gallery Image 5" />
          </div>
        </div>
      </div>

      <div id="page7">
        <div className="img_overlay">
          <img src="/images/page7 img1.png" alt="Page 7 Image" />
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

      <div id="page8">
        <div className="head">
          <p className="p1">Visit Us</p>
          <p className="p2">
            We'll love to share the products which our customers has appreciated
          </p>
        </div>
        <div className="list">
          <span className="items" onClick={() => address("flagship")}>
            {" "}
            Flagship Store
          </span>
          <span className="items" onClick={() => address("ahmedabad")}>
            Ahmedabad
          </span>
          <span className="items" onClick={() => address("surat")}>
            Surat
          </span>
          <span className="items" onClick={() => address("rajkot")}>
            Rajkot
          </span>
          <span className="items" onClick={() => address("mumbai")}>
            Mumbai
          </span>
          <span className="items" onClick={() => address("secunderabad")}>
            Secunderabad
          </span>
          <span className="items" onClick={() => address("delhi")}>
            Delhi
          </span>
          <span className="items" onClick={() => address("varanasi")}>
            Varanasi
          </span>
        </div>
        <div className="address">
          <p id="p1">Taruni</p>
          <p id="p2">
            2-1-178, Kandoji Bazar General Bazaar, Kalasiguda, Secunderabad.
          </p>
        </div>
      </div>
    </div>
  );
}
