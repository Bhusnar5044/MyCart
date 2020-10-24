import React, { useEffect, useState,useRef } from 'react'
import Style from './AllProducts.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {connect} from 'react-redux'
import {setXPosition,fetchProductList,fetchProductInfo,setImage,add_Item} from '../../Redux'
import ProductCard from '../ProductCard/ProductCard'
import { useHistory } from "react-router";


const AllProducts = ({uiData,FetchedData,fetchProductList,setImage,add_Item,fetchProductInfo,setXPosition},ref) => {
    const [search, setSearch] = useState("");
    const history = useHistory();
    const toggleMenu = () => {
        if (uiData.xPosition >= 0) {
        setXPosition(-2000);
        } else {
        setXPosition(0);
        }
    };

    const onChange = e => {
        setSearch(e.target.value);
    };

    const handleClick = (id,image) => {
        console.log("id: ", id);
        setImage(image);
        fetchProductInfo(id);
        history.push("/productViewPage");
      };

    useEffect(()=>{
        // setXPosition(0);
        fetchProductList(FetchedData.filterVal);
    },[]);

    const filteredProducts = FetchedData.productList && FetchedData.productList!==[] && FetchedData.productList.filter(data => {
        return (
          data.name.toLowerCase().indexOf(search.toLowerCase()) !==
          -1
        );
    });

    return(
        <div className={Style.main} >
            <div className={Style.filterhead}>
                <button
                onClick={() => toggleMenu()}
                className={Style.toggleMenu}
                >
                <FontAwesomeIcon icon="sliders-h" />
                </button>

                <span  className={Style.topPick}>
                    <b>Products</b>
                </span>
                <input
                    className={Style.filter+' '+Style.inputs}
                    type="text"
                    name="query"
                    onChange={onChange}
                    value={search}
                    // autoComplete="off"
                    placeholder="Search Products By Name"
                />
            </div>
            
            <div className={Style.productCards}>
            {/* <Counter/> */}
                {FetchedData &&
                FetchedData.productList &&
                filteredProducts.map(data => (
                    <ProductCard key={data.defaultArticle.code} info={data} handleClick={handleClick} />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        uiData: state.uiReducer,
        FetchedData: state.AxiosReducer
    }
}

const mapDispatchToProps = dispatch => {
    return{
        setXPosition: x => dispatch(setXPosition(x)),
        fetchProductList: url =>dispatch(fetchProductList(url)),
        fetchProductInfo: id =>dispatch(fetchProductInfo(id)),
        setImage: image =>dispatch(setImage(image)),
        add_Item: item => dispatch(add_Item(item))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AllProducts) 