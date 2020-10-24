import React, { Component } from 'react'
import AllProducts from '../../Components/AllProducts/AllProducts'
import FilterBar from '../../Components/FilterBar/FilterBar'
import Style from './HomePage.module.scss'

class Homepage extends Component{
    render(){
        return(
            <div className={Style.main}>
                <FilterBar/>
                <AllProducts/>
            </div>
        )
    }
}

export default Homepage