import React, { useState } from "react";
import Style from "./StripeButton.module.scss";
import StripeCheckout from "react-stripe-checkout";
import swal from "sweetalert";

function StripeButton({
  totalAmount,
}) {
  const StripeTotalAmount = totalAmount * 100;
  const StripePublishKey =
    "pk_test_51HEe4zJ3nFTaopTruoYaGOhX6L387ZooKVr8KWPeQX0HOcVCvBc6UHemqup7npE7QwS34TGj9vSZ6e0B7H2TysKG00HibMthwl";

  const onPaymentSuccess = token => {
    console.log(token);
    swal("Hurray !", "Your Order Has been Placed!", "success");
  };

  return (
    <div className={Style.StripeButton}>
        <StripeCheckout
          className={Style.stripe_button}
          label="Go for Payment"
          name="_MyCart_"
          billingAddress
          shippingAddress
          allowRememberMe
          image="https://svgshare.com/i/Nbd.svg"
          description={`You will have to pay ${totalAmount} rupees`}
          amount={StripeTotalAmount}
          panelLabel="Pay Now"
          token={onPaymentSuccess}
          stripeKey={StripePublishKey}
          currency="INR"
        />
    </div>
  );
}

export default StripeButton
