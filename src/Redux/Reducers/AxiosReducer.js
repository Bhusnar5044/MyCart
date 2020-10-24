import {
    FETCH_REQUEST,
    FETCH_FAILURE,
    FETCH_CATEGORY_SUCCESS,
    FETCH_PRODUCT_LIST_SUCCESS,
    FETCH_PRODUCT_INFO_SUCCESS,
    SET_FILTER,
    SET_IMAGE
  } from '../Actions/AxiosActions/actionTypes'
  import AxiosInitialState from './InitialState/AxiosInitialState'
  
  const AxiosReducer = (state = AxiosInitialState, action) => {
    switch (action.type) {
      case SET_FILTER:
        state = {
          ...state,
          filterVal: action.payload
        }
        break;
      case SET_IMAGE:
      state = {
        ...state,
        image: action.payload
      }
      break;
      case FETCH_REQUEST:
        state = {
          ...state,
          loading: true
        }
        break;
        
      case FETCH_CATEGORY_SUCCESS:
        state = {
          ...state,
          loading: false,
          category: action.payload,
          error: ''
        }
        break;

      case FETCH_PRODUCT_LIST_SUCCESS:
        console.log(action)
        state = {
          ...state,
          loading: false,
          productList: action.payload,
          error: ''
        }
        break;

      case FETCH_PRODUCT_INFO_SUCCESS:
        state = {
          ...state,
          loading: false,
          productInfo: action.payload,
          error: ''
        }
        break;

      case FETCH_FAILURE:
        state = {
          ...state,
          loading: false,
          cuisines: [],
          error: action.payload
        }
      break;
    }
    return state;
  }
  
  export default AxiosReducer
  