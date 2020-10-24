import React, { Component } from 'react'
import ProductView from '../../Components/ProductView/ProductView'
import Style from './ProductViewPage.module.scss'

class ProductViewPage extends Component{
    render(){
        return(
            <div className={Style.main}>
                <ProductView/>
            </div>
        )
    }
}

export default ProductViewPage