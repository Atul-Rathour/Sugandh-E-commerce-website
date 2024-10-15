import React from "react";
import "./Main.css";

const main = () => {
  return (
    <div id="PagePreview">
      <div className="wrapper">
        <div className="image">
          <img
            src="https://storage.googleapis.com/sugandh-ea169.appspot.com/1716283727078_MH_02743.jpg"
            alt=""
          />
        </div>

        <div className="details">
          {/* <p className="address">
            Home /Dresses & Maxi /Dusty Pink Kaftan Dress
          </p> */}

          {/* <div className="box1">
            <p className="name">Dusty Pink Kaftan Dress</p>

            <p className="price">₹2600</p>

            <div className="wrapper">
              <div className="size">
                size:
                <ul className="list">
                  <li>S</li>
                  <li>M</li>
                  <li>L</li>
                  <li>XL</li>
                </ul>
              </div>

              <div className="color">Color: </div>
            </div>

            <div className="buttons">
              <button className="like">
                <img src="/images/like.png" alt="Like" />
              </button>

              <div class="quantity">
                <span class="minus">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-minus"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </span>
                <input
                  id="quantity_6355475f3e874"
                  class="input-text qty"
                  step="1"
                  min="1"
                  name="quantity"
                  title="Qty"
                  inputmode="numeric"
                  autocomplete="off"
                  max=""
                  value="4"
                />
                <span class="plus">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-plus"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </span>
              </div>

              <button className="cart">Add to Cart</button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default main;
