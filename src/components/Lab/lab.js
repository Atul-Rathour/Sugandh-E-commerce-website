import React from 'react';
import './Shop.css'; // Ensure to include your CSS file

const products = [
  { id: 'img0', src: 'https://storage.googleapis.com/sugandh-ea169.appspot.com/1708770887116_SG8528.jpg', alt: 'Sequence orange Rose kaftan  | Kaftans | Sugandh', name: 'Sequence orange Rose kaftan', price: '₹ 9700' },
  { id: 'img1', src: 'https://storage.googleapis.com/sugandh-ea169.appspot.com/1708771103081_SG8561.jpg', alt: 'Golden Rose Kaftan  | Kaftans | Sugandh', name: 'Golden Rose Kaftan', price: '₹ 9500' },
  { id: 'img2', src: 'https://storage.googleapis.com/sugandh-ea169.appspot.com/1708771227547_SG8605.jpg', alt: 'Red Side Embroidery Kaftan  | Kaftans | Sugandh', name: 'Red Side Embroidery Kaftan', price: '₹ 8500' },
  { id: 'img3', src: 'https://storage.googleapis.com/sugandh-ea169.appspot.com/1708771507020_SG8667.jpg', alt: 'Rust Side Embroidery Kaftan  | Kaftans | Sugandh', name: 'Rust Side Embroidery Kaftan', price: '₹ 8500' },
  { id: 'img4', src: 'https://storage.googleapis.com/sugandh-ea169.appspot.com/1708771704371_SG8690.jpg', alt: 'Steel blue Side Embroidery Kaftan | Kaftans | Sugandh', name: 'Steel blue Side Embroidery Kaftan', price: '₹ 9000' },
  { id: 'img5', src: 'https://storage.googleapis.com/sugandh-ea169.appspot.com/1708771919544_SG8731(1).jpg', alt: 'Olive Side Embroidery Kaftan | Kaftans | Sugandh', name: 'Olive Side Embroidery Kaftan', price: '₹ 9200' },
  { id: 'img6', src: 'https://storage.googleapis.com/sugandh-ea169.appspot.com/1708772024101_SG8761.jpg', alt: 'Cut Embroidery kaftan  | Kaftans | Sugandh', name: 'Cut Embroidery kaftan', price: '₹ 9000' },
  { id: 'img7', src: 'https://storage.googleapis.com/sugandh-ea169.appspot.com/1708772314114_SG8856.jpg', alt: 'Cut Side Embroidery Kaftan  | Kaftans | Sugandh', name: 'Cut Side Embroidery Kaftan', price: '₹ 9200' },
  { id: 'img8', src: 'https://storage.googleapis.com/sugandh-ea169.appspot.com/1708772858820_SG8916.jpg', alt: 'Sequence wine Rose kaftan  | Kaftans | Sugandh', name: 'Sequence wine Rose kaftan', price: '₹ 9700' },
  { id: 'img9', src: 'https://storage.googleapis.com/sugandh-ea169.appspot.com/1708773092905_SG8953.jpg', alt: 'Bird Leaf kaftan  | Kaftans | Sugandh', name: 'Bird Leaf kaftan', price: '₹ 9500' },
  { id: 'img10', src: 'https://storage.googleapis.com/sugandh-ea169.appspot.com/1708773241478_SG8987.jpg', alt: 'Aqua blue single rose kaftan  | Kaftans | Sugandh', name: 'Aqua blue single rose kaftan', price: '₹ 8500' },
  { id: 'img11', src: 'https://storage.googleapis.com/sugandh-ea169.appspot.com/1708773362132_SG9016.jpg', alt: 'Falling leaf peach kaftan | Kaftans | Sugandh', name: 'Falling leaf peach kaftan', price: '₹ 9000' },
  { id: 'img12', src: 'https://storage.googleapis.com/sugandh-ea169.appspot.com/1708773693620_SG8814.jpg', alt: 'Lilac Cut Embroidery kaftan  | Kaftans | Sugandh', name: 'Lilac Cut Embroidery kaftan', price: '₹ 9000' },
  { id: 'img13', src: 'https://storage.googleapis.com/sugandh-ea169.appspot.com/1708773934916_SG8877(1).jpg', alt: 'Silver Rose Kaftan  | Kaftans | Sugandh', name: 'Silver Rose Kaftan', price: '₹ 9000' },
  { id: 'img14', src: 'https://storage.googleapis.com/sugandh-ea169.appspot.com/1708595670801_DSCF2699.jpg', alt: 'Pastel Rose Top  | Tops | Sugandh', name: 'Pastel Rose Top', price: '₹ 2999' },
  { id: 'img15', src: 'https://storage.googleapis.com/sugandh-ea169.appspot.com/1708596157552_DSCF2522.jpg', alt: 'Sage Green dress | Dresses | Sugandh', name: 'Sage Green dress', price: '₹ 4999' },
  { id: 'img16', src: 'https://storage.googleapis.com/sugandh-ea169.appspot.com/1708597813083_DSCF3093.jpg', alt: 'Tint top  | Tops | Sugandh', name: 'Tint top', price: '₹ 2599' },
  { id: 'img17', src: 'https://storage.googleapis.com/sugandh-ea169.appspot.com/1708595289011_DSCF2938.jpg', alt: 'Vernal Spice Rust dress | Dresses | Sugandh', name: 'Vernal Spice Rust dress', price: '₹ 4799' }
];

const Shop = () => {
  return (
    <div className="sec-2">
      <div className="gallery">
        <div className="col main-content shop-products-col">
          <div className="header d-flex justify-content-between align-items-center">
            <p className="p1" style={{ paddingTop: '7px' }}>
              <a href="sugandh.html">Home</a> / <a href="/the-shop">Shop</a>
            </p>
            <div className="filter align-items-center d-none d-lg-flex">
              {/* <img src="https://sugandh.co/static/media/filter.4546628c1cfb552515eb.png" alt="Filter"> */}
              <p className="m-2">Filter</p>
              <div className="sort-selection">
                <form action="#">
                  <label htmlFor="sort"></label>
                  <select
                    name="sort"
                    id="sort"
                    className="sort-selection--style"
                    style={{
                      backgroundColor: '#fff',
                      border: '2px solid black',
                      padding: '5px',
                      borderRadius: '7px'
                    }}
                  >
                    <option value="SortFilter">Sort By</option>
                    <option value="lowest">Price (lowest)</option>
                    <option value="highest">Price (highest)</option>
                    <option value="a-z">Name (a-z)</option>
                    <option value="z-a">Name (z-a)</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
          <div>
            <div className="row">
              {products.map((product) => (
                <div key={product.id} className="col-6 col-sm-4 col-md-4 col-lg-4">
                  <div className="img-div">
                    <img
                      src={product.src}
                      id={product.id}
                      alt={product.alt}
                    />
                    <div className="d_none">
                      <p>Quick View</p>
                    </div>
                  </div>
                  <div className="options mt-2 d-flex justify-content-between">
                    <p className="fs-9rem">{product.name}</p>
                    <p className="color-grey">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <br />
            <div className="load-more">
              <button className="background-transparent">Load More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
