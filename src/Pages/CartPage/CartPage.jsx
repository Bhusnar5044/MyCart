import React, { Fragment } from "react";
import Style from "./CartPage.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PIC from "../../Assets/Images/empty.png";
import StripeButton from "../../Components/CheckOut_Stripe_Button/StripeButton";
import CheckOutItems from "../../Components/CheckOutItems/CheckOutItems";
import { connect } from "react-redux";

function UserCart({ CartItems, totalItemsPrice }) {

  return (
    <div className={Style.checkoutPage}>
      {CartItems.length > 0 && (
        <div className={Style.checkoutHeader}>
          <div className={Style.headerBlock}>
            <span>Items</span>
          </div>

          <div className={Style.headerBlock}>
            <span>Description</span>
          </div>

          <div className={Style.headerBlock}>
            <span>Quantity</span>
          </div>

          <div className={Style.headerBlock}>
            <span>Price</span>
          </div>

          <div className={Style.headerBlock}>
            <span>Remove</span>
          </div>
        </div>
      )}
      
      {CartItems.length ? (
        CartItems.map(item => (
          <Fragment key={item.id}>
            <CheckOutItems item={item} />
          </Fragment>
        ))
      ) : (
        <div
          className={Style.emptyCart}
          style={{ backgroundImage: `url(${PIC})` }}
        ></div>
      )}
      {CartItems.length > 0 && (
        <div className={Style.totalPrice}>
          <span>
            Total Price :{" "}
            <FontAwesomeIcon style={{ fontSize: "24px", color: "black", opacity: "0.8" }}
            icon="rupee-sign" />
              <b style={{ fontSize: "24px", color: "green" }}>
                &nbsp;{totalItemsPrice}
              </b>
          </span>
        </div>
      )}
      {CartItems.length > 0 && <StripeButton totalAmount={totalItemsPrice} />}
    </div>
  );
}
const mapStateToProps = state => {
  return {
    CartItems: state.CartReducer.CartItems,
    totalItemsPrice: state.CartReducer.CartItems.reduce(
      (initialCount, cartItem) =>
        initialCount + cartItem.quantity * cartItem.price,
      0
    ),
  };
};

export default connect(mapStateToProps)(UserCart);
