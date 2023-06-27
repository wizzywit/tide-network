import React, { Fragment, useState } from "react";
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import { Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { totalPrice } from "../../utils";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../store/actions/action";
import Footer from "../../components/footer/Footer";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const CartPage = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  const SubmitHandler = (e) => {
    e.preventDefault()
  };

  const { carts } = props;

  const [delivery, deliveryCount] = useState(0);

  return (
    <Fragment>
      <Navbar2 />
      <PageTitle pageTitle={"Cart"} pagesub={"Cart"} />
      <div className="cart-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="single-page-title">
                <h2>Your Cart</h2>
                <p>There are {carts.length} products in this list</p>
              </div>
            </div>
          </div>
          <div className="cart-wrapper">
            <div className="row">
              <div className="col-lg-8 col-12">
                <form onSubmit={SubmitHandler}>
                  <div className="cart-item">
                    <table className="table-responsive cart-wrap">
                      <thead>
                        <tr>
                          <th className="images images-b">Product</th>
                          <th className="ptice">Price</th>
                          <th className="stock">Quantity</th>
                          <th className="ptice total">Subtotal</th>
                          <th className="remove remove-b">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {carts &&
                          carts.length > 0 &&
                          carts.map((catItem, crt) => (
                            <tr key={crt} className="wishlist-item">
                              <td className="product-item-wish">
                                <div className="check-box"><input type="checkbox"
                                  className="myproject-checkbox" />
                                </div>
                                <div className="images">
                                  <span>
                                    <img src={catItem.proImg} alt="" />
                                  </span>
                                </div>
                                <div className="product">
                                  <ul>
                                    <li className="first-cart">{catItem.title}</li>
                                    <li>
                                      <div className="rating-product">
                                        <i className="fi flaticon-star"></i>
                                        <i className="fi flaticon-star"></i>
                                        <i className="fi flaticon-star"></i>
                                        <i className="fi flaticon-star"></i>
                                        <i className="fi flaticon-star"></i>
                                        <span>{catItem.ratting}</span>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                              <td className="ptice">${catItem.price}</td>
                              <td className="td-quantity">
                                <div className="quantity cart-plus-minus">
                                  <Grid className="quantity cart-plus-minus">
                                    <Button
                                      className="dec qtybutton"
                                      onClick={() =>
                                        props.decrementQuantity(catItem.id)
                                      }
                                    >
                                      -
                                    </Button>
                                    <input value={catItem.qty} type="text" />
                                    <Button
                                      className="inc qtybutton"
                                      onClick={() =>
                                        props.incrementQuantity(catItem.id)
                                      }
                                    >
                                      +
                                    </Button>
                                  </Grid>
                                </div>
                              </td>
                              <td className="ptice">${catItem.qty * catItem.price}</td>
                              <td className="action">
                                <ul>
                                  <li className="w-btn">
                                    <button
                                      data-tooltip-id="r-cart"
                                      data-tooltip-content="Remove from Cart"
                                      onClick={() =>
                                        props.removeFromCart(catItem.id)
                                      }><i className="fi ti-trash"></i></button>
                                    <Tooltip id="r-cart" />
                                  </li>
                                </ul>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="cart-action">
                    <div className="apply-area">
                      <input type="text" className="form-control" placeholder="Enter your coupon" />
                      <button className="theme-btn" type="submit">Apply</button>
                    </div>
                    <button className="theme-btn" type="button"><i className="fi flaticon-refresh"></i> Update Cart</button>
                  </div>
                </form>
              </div>
              <div className="col-lg-4 col-12">
                <div className="cart-total-wrap">
                  <h3>Cart Totals</h3>
                  <div className="sub-total">
                    <h4>Subtotal</h4>
                    <span>${totalPrice(carts)}</span>
                  </div>
                  <div className="shipping-option">
                    <span>Shipping</span>
                    <ul>
                      <li className="free" checked onClick={() => deliveryCount(delivery - delivery)}>
                        <input id="Free" type="radio" name="color" value="30" />
                        <label htmlFor="Free">Free Shipping</label>
                      </li>
                      <li className="free" onClick={() => deliveryCount(delivery + 10)}>
                        <input id="Local" type="radio" name="color" value="30"/>
                        <label htmlFor="Local">Local Pickup: <span>$10.00</span></label>
                      </li>
                      <li className="free">
                        <span>
                          Shipping options will be updated during checkout.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="total">
                    <h4>Total</h4>
                    <span>${totalPrice(carts) + delivery}</span>
                  </div>
                  <Link className="theme-btn" onClick={ClickHandler} to="/checkout">Proceed To CheckOut</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    carts: state.cartList.cart,
  };
};
export default connect(mapStateToProps, {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
})(CartPage);
