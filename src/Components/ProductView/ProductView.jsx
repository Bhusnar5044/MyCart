import React, { useState, useEffect } from "react";
import Style from "./ProductView.module.scss";
import {connect} from 'react-redux'
import {add_Item} from '../../Redux'
import swal from "sweetalert";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ProductView = ({ FetchedData}) => {
  const {
    code,
    name,
    whitePrice,
    description,
  } = FetchedData.productInfo;

  const item = {
    "id":code,
    "name":name,
    "image":FetchedData.image,
    "price":whitePrice.price,
  }

  useEffect(() => {
   
  });

  const addCart = () =>{
    swal(`Added to Cart.`, {
      icon: "success",
    }); 
  }

  return (
    <div
      className={Style.productCard}
    >
        <div
          className={Style.image}
          style={{ backgroundImage: `url(${FetchedData.image})` }}
        />

        <div className={Style.container1}>
          <h3 className={Style.restaurantName}>
            <b>{name}</b>
          </h3>

          <div style={{ marginTop: "10px" }}>
            <span>
              <b>
              <FontAwesomeIcon icon="rupee-sign" /> {whitePrice.price}
              </b>
            </span>
            .
            <span>
              <b>Available</b>
            </span>
          </div>
          <div>
            <b>{description}</b>
          </div>

          <div className={Style.btnDiv}>
            <button className={Style.cardbtn} onClick={() => {add_Item(item);addCart()}}>Add To Cart</button>
            <button className={Style.cardbtn}>Buy</button>
          </div>
        </div>
    </div>
  );
};

const mapStateToProps = (state) =>{
    return{
        FetchedData: state.AxiosReducer
    }
}

const mapDispatchToProps = dispatch => {
  return{
      add_Item: item => dispatch(add_Item(item))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductView) 