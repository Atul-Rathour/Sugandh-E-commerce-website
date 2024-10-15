import React from 'react';
import './navbar.css'

export default function Navbar() {
  return (
    <div>

        {/* <img src="sugandh.jpg" alt="" /> */}
      <nav id="navbar" className="navbar navbar-expand-lg fixed-top shadow mt-4">
        <div className="container-fluid" style={{ padding: '4vh' }}>
          <a href="#">
            <img src="/images/sugandh.jpg" alt="" className="brand-logo" />
          </a>

          <ul className="navbar-nav justify-content-end flex-grow-1 d-none d-lg-flex">
            <li className="nav-item">
              <a href="sugandh.html" className="nav-link fs-6 cool-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link fs-6 cool-link">
                Our Brands
              </a>
            </li>
            <li className="nav-item">
              <a href="shop.html" className="nav-link fs-6 cool-link">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a href="collections.html" className="nav-link fs-6 cool-link">
                Collections
              </a>
            </li>
            <li className="nav-item">
              <a href="sale.html" className="nav-link fs-6 cool-link">
                Sale
              </a>
            </li>
            <li className="nav-item">
              <a href="Blog.html" className="nav-link fs-6 cool-link">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a href="lookbook.html" className="nav-link fs-6 cool-link">
                Lookbook
              </a>
            </li>
            <li className="nav-item">
              <a href="contact.html" className="nav-link fs-6 cool-link">
                Contact us
              </a>
            </li>
          </ul>

          <ul className="navbar-nav justify-content-end flex-grow-1 d-none d-lg-flex">
            <li className="nav-item mx-3">
              <div className="search-box">
                <button className="btn-search">
                  <i className="fas fa-search">
                    <img src="/images/search.png" alt="" className="icon search" />
                  </i>
                </button>
                <input type="text" className="input-search shadow" placeholder="Search..." />
              </div>
            </li>
            <li className="nav-item mx-3">
              <a href="login.html" className="nav-link">
                <img src="/images/userprofile.png" alt="" className="icon" />
              </a>
            </li>
            <li className="nav-item mx-3">
              <a href="cart.html" className="nav-link">
                <img src="/images/cart.png" alt="" className="icon" />
              </a>
            </li>
            <li className="nav-item mx-3">
              <a href="#" className="nav-link">
                <img src="/images/like.png" alt="" className="icon" />
              </a>
            </li>
          </ul>

          <button className="navbar-toggler me-sm-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <input type="checkbox" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
          </button>
        </div>

        <div id="offcanvasNavbar" className="offcanvas offcanvas-start d-lg-none">
          <div className="offcanvas-header pb-0 pt-3">
            <a href="#" className="active">
              <img id="offcanvasNavbarLabel" src="/images/sugandh.jpg" alt="" className="img-fluid" data-bs-dismiss="offcanvas" aria-label="Close" />
            </a>
          </div>

          <hr className="d-block d-lg-none" />

          <div className="offcanvas-body">
            <ul className="d-block d-lg-none mb-5">
              <li className="mx-2">
                <div className="search-container d-none d-lg-flex">
                  <input type="text" name="search" placeholder="Search..." className="search-input" />
                  <a href="#" className="search-btn">
                    <i className="fas fa-search">
                      <img src="/images/sugandh.jpg" className="icon search" alt="Search" />
                    </i>
                  </a>
                </div>

                <div className="search__container">
                  <input className="search__input" type="text" placeholder="Search" />
                </div>
              </li>
            </ul>
            <ul className="navbar-nav justify-content-end flex-grow-1">
              <li className="nav-item">
                <a href="sugandh.html" className="nav-link fs-6 cool-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link fs-6 cool-link">
                  Our Brands
                </a>
              </li>
              <li className="nav-item">
                <a href="shop.html" className="nav-link fs-6 cool-link">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a href="collections.html" className="nav-link fs-6 cool-link">
                  Collections
                </a>
              </li>
              <li className="nav-item">
                <a href="sale.html" className="nav-link fs-6 cool-link">
                  Sale
                </a>
              </li>
              <li className="nav-item">
                <a href="Blog.html" className="nav-link fs-6 cool-link">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a href="lookbook.html" className="nav-link fs-6 cool-link">
                  Lookbook
                </a>
              </li>
              <li className="nav-item">
                <a href="contact.html" className="nav-link fs-6 cool-link">
                  Contact us
                </a>
              </li>
            </ul>

            <ul className="navbar-nav justify-content-end flex-grow-1 d-none d-lg-flex">
              <li className="nav-item mx-3">
                <div className="search-box">
                  <button className="btn-search">
                    <i className="fas fa-search">
                      <img src="/images/search.png" alt="" className="icon search" />
                    </i>
                  </button>
                  <input type="text" className="input-search shadow" placeholder="Search..." />
                </div>
              </li>
              <li className="nav-item mx-3">
                <a href="login.html" className="nav-link">
                  <img src="/images/userprofile.png" alt="" className="icon" />
                </a>
              </li>
              <li className="nav-item mx-3">
                <a href="cart.html" className="nav-link">
                  <img src="/images/cart.png" alt="" className="icon" />
                </a>
              </li>
              <li className="nav-item mx-3">
                <a href="#" className="nav-link">
                  <img src="/images/like.png" alt="" className="icon" />
                </a>
              </li>
            </ul>

            <ul className="navbar-nav mobile-nav-icons justify-content-end flex-grow-1 d-flex d-lg-none mt-4">
              <hr className="d-block d-lg-none" />

              <li className="mx-2 icons">
                <span data-bs-dismiss="offcanvas" aria-label="Close">
                  <a className="nav-link cool-link" href="login.html" style={{ color: 'black' }}>
                    <span className="d-flex justify-content-between">
                      <span>User Profile</span>
                    </span>
                  </a>
                </span>
                <img src="/images/userprofile.png" className="icon user" alt="User Profile" />
              </li>

              <hr className="d-block d-lg-none" />

              <li className="mx-2 icons">
                <span data-bs-dismiss="offcanvas" aria-label="Close">
                  <a className="nav-link cool-link" href="cart.html" style={{ color: 'black' }}>
                    <span className="d-flex justify-content-between">
                      <span>Cart</span>
                    </span>
                  </a>
                </span>
                <img src="/images/cart.png" className="icon cart" alt="Cart" />
              </li>

              <hr className="d-block d-lg-none" />

              <li className="mx-2 icons">
                <span data-bs-dismiss="offcanvas" aria-label="Close">
                  <a className="nav-link cool-link" href="/wishlist" style={{ color: 'black' }}>
                    <span className="d-flex justify-content-between">
                      <span>Wishlist</span>
                    </span>
                  </a>
                </span>
                <img src="/images/like.png" className="icon like" alt="Wishlist" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
