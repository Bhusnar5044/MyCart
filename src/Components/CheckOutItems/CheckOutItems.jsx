import React from "react";
import Style from "./CheckOutItems.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from "react-redux";
import swal from "sweetalert";
import {
  clear_Item,
  add_Item,
  remove_item,
} from "../../Redux";

function CheckOutItems({ item, clear_Item, add_Item, remove_item }) {
  
  const handleItemDelete = (itemId, itemName) => {
    swal({
      title: "Are you sure?",
      text: `${itemName} will be removed from cart.`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(willDelete => {
      if (willDelete) {
        clear_Item(itemId);
        swal(`${itemName}has been removed from cart.`, {
          icon: "success",
        });
      } else {
        return;
      }
    });
  };

  const handleItemRemove = Item => {
    if (Item.quantity < 2) {
      swal({
        title: "Are you sure?",
        text: `${Item.name} will be removed from cart.`,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then(willDelete => {
        if (willDelete) {
          clear_Item(item.id);
          swal(`${item.name}has been removed from cart.`, {
            icon: "success",
          });
        } else {
          return;
        }
      });
    } else {
      remove_item(Item);
    }
  };

  return (
    <div className={Style.Checkout_Item}>
      
      <div className={Style.imageContainer}>
        <img src={item.image} alt="ordered-item" />
      </div>

      <span className={Style.name}>{item.name}</span>

      <span className={Style.quantity}>
        <div className={Style.add}>
          <FontAwesomeIcon style={{ fontSize: "16px", color: "red" }}
            onClick={() => handleItemRemove(item)} icon="minus" />
        </div>

        <span className={Style.value}>{item.quantity}</span>

        <div className={Style.remove}>
          <FontAwesomeIcon style={{ fontSize: "16px", color: "green" }}
            onClick={() => add_Item(item)} icon="plus" />
        </div>
      </span>

      <span className={Style.price}>{item.price * item.quantity}</span>

      <div className={Style.remove}>
        <FontAwesomeIcon style={{ fontSize: "16px", color: "green" }}
            onClick={() => handleItemDelete(item.id, item.name)} icon="trash-alt" />
      </div>

    </div>
  );
  
}
const mapDispatchToProps = dispatch => {
  return {
    clear_Item: itemId => dispatch(clear_Item(itemId)),
    add_Item: item => dispatch(add_Item(item)),
    remove_item: item => dispatch(remove_item(item)),
  };
};

export default connect(null, mapDispatchToProps)(CheckOutItems);
