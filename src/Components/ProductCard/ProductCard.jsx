import React, { useState, useEffect } from "react";
import Style from "./ProductCard.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {connect} from 'react-redux'
import {add_Item} from '../../Redux'
import swal from "sweetalert";


const ProductCard = ({ info, handleClick,add_Item }) => {
  const [textShow, setTextShow] = useState(false);
  const [divshow, setdivshow] = useState("nodivshow");
  const {
    articleCodes,
    name,
    images,
    price,
    stock,
  } = info;

  let id = articleCodes ? articleCodes[0]:'';

  const image = images?images[0].url:'';

  const item = {
    "id":id,
    "name":name,
    "image":image,
    "price":price.value,
    "stock":stock.stockLevel,
  }

  useEffect(() => {
    if (textShow) {
      setdivshow(Style.divshow);
    } else {
      setdivshow(Style.nodivshow);
    }
  });
  
  const onhandleClick = () => {
    console.log(articleCodes);
    console.log("prod_id: ", id);
    handleClick(id,image);
  };

  const addCart = () =>{
    swal(`Added to Cart.`, {
      icon: "success",
    }); 
  }

  
  return (
    <div
      className={Style.productCard}
      id={info.key}
      onMouseEnter={() => setTextShow(true)}
      onMouseLeave={() => setTextShow(false)}
    >
        <div
          className={Style.image}
          style={{ backgroundImage: `url(${image})` }}
        />

        <div className={divshow}>
          <a href="#" onClick={(e)=>{e.preventDefault();onhandleClick()}}><b>Quick View</b></a>
        </div>

        <div className={Style.container1}>
          <h3 className={Style.restaurantName}>
            <b>{name}</b>
          </h3>

          <div style={{ marginTop: "10px" }}>
            <span>
              <b>
              <FontAwesomeIcon icon="rupee-sign" /> {price.value}
              </b>
            </span>
            .
            <span>
              <b>{stock.stockLevel+" Available"}</b>
            </span>
          </div>

          <div className={Style.btnDiv}>
            <button className={Style.cardbtn} onClick={() => {add_Item(item);addCart()}}>Add To Cart</button>
            <button className={Style.cardbtn}>Buy</button>
          </div>
        </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return{
      add_Item: item => dispatch(add_Item(item))
  }
}

export default connect(null,mapDispatchToProps)(ProductCard)
