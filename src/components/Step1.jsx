import { useState } from "react";
import "../css.css";

export default function Step1() {
  const [product, setprod] = useState([
    {
      id: 2,
      image: "img/offer-x2.png",
      quantity: 2,
      name: "2x Product",
      price: 18.0,
      priceTotal: 36.0,
      shippingPrice: 0.0,
      shippingMethod: 2,
    },
    {
      id: 4,
      image: "img/offer-x4.png",
      quantity: 4,
      name: "4x Product",
      price: 16.0,
      priceTotal: 64.0,
      shippingPrice: 0.0,
      shippingMethod: 2,
    },
    {
      id: 3,
      image: "img/offer-x3.png",
      quantity: 3,
      name: "3x Product",
      price: 17.0,
      priceTotal: 51.0,
      shippingPrice: 0.0,
      shippingMethod: 2,
    },
    {
      id: 1,
      image: "img/offer-x1.png",
      quantity: 1,
      name: "1x Product",
      price: 19.0,
      priceTotal: 19.0,
      shippingPrice: 7.99,
      shippingMethod: 1,
    },
  ]);

  const publicKey = "HJiDgB1BcNDWx0lJYvP79mqDeRN8d0EVN9DfqYLv";
  const nextURL = "/upsell.html";
  const offers = {
    priceRetail: 20.0,
  };

  return (
    <div id="block--offers" className="col-12 col-lg-6">
      <div className="step-title">STEP 1: SELECT PACKAGE</div>
      <hr className="mt-2" />
      <div className="mb-5">
        <div className="row align-items-center">
          <div className="col">
            <div className="offer-header d-flex justify-content-between align-items-center border-bottom">
              <div>
                {product.map((prod) => (
                  <div key={prod.id}>
                    <div className="offer-header d-flex justify-content-between align-items-center border-bottom">
                      <div className="offer-title d-flex align-items-center px-3">
                        <span className="offer-title-text fs-5  text-nowrap">
                          {prod.name}
                        </span>
                      </div>
                      <div className="px-3 py-3 text-nowrap fs-7 fw-bold">
                        <span className="shipping-cost">
                          {prod.shippingPrice}
                        </span>
                        SHIPPING
                      </div>
                    </div>
                    <div className="offer-content d-flex align-items-center ps-4 py-2">
                      <div className="offer-content-img">
                        <img
                          src="img/offer-x1.png"
                          className="img-fluid p-image"
                        />
                      </div>
                      <div className="offer-content-info pe-2 ms-3">
                        <div className="offer-content-price-each  text-primary">
                          <span className="price-each h4 fw-bold">
                            ${prod.price.toFixed(2)}
                          </span>
                          <span className="fs-8 fw-light">/each</span>
                        </div>
                        <div className="offer-content-price-orig text-secondary">
                          <s>
                            Orig
                            <span className="price-each-retail">
                              ${prod.shippingMethod.toFixed(2)}
                            </span>
                          </s>
                        </div>
                        <div className="offer-content-price-total h6 fw-bold text-success">
                          Total:
                          <span className="price-total">
                            ${prod.priceTotal.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border bg-white rounded-3 p-4">
              <div className="">
                <div className="h5">Order Summary</div>
              </div>
              <div className="d-flex justify-content-between px-3 pt-2 pb-1 border-bottom text-uppercase fs-7">
                <div>Item</div>
                <div>Price</div>
              </div>
              <div className="justify-content-between p-3 d-flex fw-bold">
                {/* <div><span className="selected-product-name">{{package}}</span> </div> */}
                <div className=" text-secondary">
                  <span className="selected-product-price"></span>
                  <span className="fs-8"> /ea</span>
                </div>
              </div>
              <div className="rounded-3 p-3 bg-xlight">
                <div className="justify-content-between py-2 d-flex fw-bold">
                  <div>Shipping:</div>
                  <div>
                    <span className="selected-shipping-price text-secondary">
                      FREE
                    </span>
                  </div>
                </div>
                <div className="d-flex justify-content-between pt-1">
                  <div className=" text-dark fw-bold">Today's Total:</div>
                  <div>
                    <span className="order-summary-total-value fs-5 text-black fw-bold">
                      0
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
