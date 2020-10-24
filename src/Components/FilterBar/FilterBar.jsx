import Style from "./FilterBar.module.scss";
import React, { useEffect, useRef } from "react";
import {fetchCategory,fetchProductList,setXPosition} from '../../Redux'
import {connect} from 'react-redux'

const SubList = props => {
    const onClick = (val) =>{
        props.handleClick(val);
    }
    return (
        <ul className={Style.subUl}>
            { props.CategoriesArray && props.CategoriesArray!==[] && props.CategoriesArray.map((subcat) => {
                return (<li><ul className={Style.ssubUl}>
                    <a href="#" key={subcat.tagCodes[0]} onClick={(e)=>{e.preventDefault();onClick(subcat.tagCodes[0])}}>{ subcat.CatName }</a>
                    { subcat.CategoriesArray && subcat.CategoriesArray!==[] && subcat.CategoriesArray.map((ssubcat) => {
                            return (<li><a href="#" className={Style.suba} key={ssubcat.tagCodes[0]} onClick={(e)=>{e.preventDefault();onClick(ssubcat.tagCodes[0])}} >{ ssubcat.CatName }</a></li>)
                        })}
                    </ul>
                </li>)
            })
            }
        </ul>
    )
}

const FilterBar = ({uiData,AxiosData,fetchCategory,fetchProductList,setXPosition}) => {

    const onClick = (val) => {
        handleClick(val)
    };

    const handleClick=(id)=>{
        console.log("Filterbar ",id);
        fetchProductList(id);
        setXPosition(-2000);
    }
    const node = useRef();

    useEffect(()=>{
        fetchCategory();
        // add when mounted
        document.addEventListener("mousedown", outhandleClick);
        // return function to be called when unmounted
        return () => {
            document.removeEventListener("mousedown", outhandleClick);
        };
    },[]);

    const outhandleClick = e => {
        if (!node.current.contains(e.target)) {
            setXPosition(-2000);
        }
      };

    return (
        <div ref={node}>
            <div className={Style.sideBar}
                style={{
                    transform: `translatex(${uiData.xPosition}px)`,
                }} 
            >
                <div className={Style.main} >
                    <div className={Style.fhead}>
                        <a className={Style.ftitle}>Select Filters</a>
                        <hr/>
                    </div>
                
                    <div className={Style.category}>
                    { AxiosData.category!==[] &&  AxiosData.category.map((cat) => {
                            return (<ul className={Style.ul}>
                            <a href="#" className={Style.cat} key={cat.tagCodes[0]} onClick={(e)=>{e.preventDefault();onClick(cat.tagCodes[0])}}>{cat.CatName}</a>
                            <li><SubList handleClick={onClick} {...cat}/></li>
                            </ul>
                            )
                        })}
                    </div>
                </div> 
            </div>
        </div>
    );
};

// export default FilterBar;

const mapStateToProps = state => {
  return {
    uiData: state.uiReducer,
    AxiosData: state.AxiosReducer
  };
};

const mapDispatchToProps = dispatch => {
    return{
        fetchCategory: x => dispatch(fetchCategory()),
        fetchProductList: id => dispatch(fetchProductList(id)),
        setXPosition: x => dispatch(setXPosition(x)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
