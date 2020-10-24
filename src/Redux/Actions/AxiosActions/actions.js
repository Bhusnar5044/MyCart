import {
  FETCH_REQUEST,
  FETCH_FAILURE,
  FETCH_CATEGORY,
  FETCH_PRODUCT_LIST,
  FETCH_PRODUCT_INFO,
  FETCH_CATEGORY_SUCCESS,
  FETCH_PRODUCT_LIST_SUCCESS,
  FETCH_PRODUCT_INFO_SUCCESS,
  SET_FILTER,
  SET_IMAGE
 
} from './actionTypes'

export const setFilter = (filter) =>{
  return {
  type: SET_FILTER,
  payload:filter
  }
}

export const setImage = (image) =>{
  return {
  type: SET_IMAGE,
  payload:image
  }
}

export const fetchCategory = () =>{
  return {
  type: FETCH_CATEGORY,
  }
}

export const fetchProductList = (id) =>{
  return {
  type: FETCH_PRODUCT_LIST,
  payload:id
  }
}

export const fetchProductInfo = (id) =>{
  return {
  type:  FETCH_PRODUCT_INFO,
  payload:id
  }
}

// export const setChange = (state) => {
//   return {
//     type: SET_CHANGE,
//     payload: state
//   }
// }

export const fetchRequest = () => {
  return {
    type: FETCH_REQUEST
  }
}

export const fetchCategorySuccess = (data) =>{
    return{
      type: FETCH_CATEGORY_SUCCESS,
      payload:data
    }
  }
  
  export const fetchProductListSuccess= (data) =>{
    return{
      type: FETCH_PRODUCT_LIST_SUCCESS,
      payload:data
    }
  }
  
  export const fetchPrductInfoSuccess = (data) => {
    return {
      type: FETCH_PRODUCT_INFO_SUCCESS,
      payload: data
    }
  }

// export const fetchCuisinesSuccess = cuisines => {
//   return {
//     type: FETCH_CUISINES_SUCCESS,
//     payload: cuisines
//   }
// }

// export const fetchRestaurantSuccess = restaurants => {
//   return {
//     type: FETCH_RESTAURANTS_SUCCESS,
//     payload: restaurants
//   }
// }

// export const fetchRestaurantHomeSuccess = restaurant => {
//   return {
//     type: FETCH_RESTUARANT_DATA_SUCCESS,
//     payload: restaurant
//   }
// }

// export const fetchDailyMenuSuccess = Menu => {
//   return {
//     type: FETCH_DAILY_MENU_SUCCESS,
//     payload: Menu
//   }
// }

export const fetchFailure = error => {
  return {
    type: FETCH_FAILURE,
    payload: error
  }
}
