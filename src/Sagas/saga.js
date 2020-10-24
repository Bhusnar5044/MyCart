import { takeLatest, put, call, takeEvery,all } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_CATEGORY,
  FETCH_PRODUCT_LIST,
  FETCH_PRODUCT_INFO,
} from "../Redux/Actions/AxiosActions/actionTypes";

import * as actions from "../Redux/Actions/AxiosActions/actions";

function* helloSaga() {
  console.log('Hello Sagas!')
}

function* watchActions() {
  yield takeLatest(FETCH_PRODUCT_LIST, fetchProductListData);
  yield takeLatest(FETCH_CATEGORY, fetchCategoryData);
  yield takeLatest(FETCH_PRODUCT_INFO, fetchProductInfoData);
}

export function* watchActionsSaga() {
  yield all ([
    watchActions(),
    helloSaga() 
  ])
}

const headers = {
  'x-rapidapi-host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com',
  'x-rapidapi-key': '8e67de32b0msh8b689f668a3ae56p15ad67jsnd89598c7f6cd'
};

function* fetchCategoryData(action) {
  const url = "https://rapidapi.p.rapidapi.com/categories/list";
  const options = {
    method: 'GET',
    url: 'https://rapidapi.p.rapidapi.com/categories/list',
    params: {country: 'in', lang: 'en'},
    headers: headers
  };
  
  console.log("fetchPlaces:", url);
  yield put(actions.fetchRequest());
  try {
    const response = yield call(() => axios.request(options));
    const categories = response.data;
    yield put(actions.fetchCategorySuccess(categories));
  } catch (error) {
    yield put(actions.fetchFailure("Fetch Places Error: " + error.message));
  }
}

function* fetchProductListData(action) { 
  const cat = action.payload;
  const options = {
    method: 'GET',
    url: 'https://rapidapi.p.rapidapi.com/products/list',
    params: {
      currentpage: '0',
      country: 'in',
      pagesize: '30',
      lang: 'en',
      categories: cat
    },
    headers: headers
  };
  
  console.log("fetchProductList: ", cat);
  yield put(actions.fetchRequest());
  try {
    const response = yield call(() => axios.request(options));
    const products = response.data.results;
    yield put(actions.fetchProductListSuccess(products));
  } catch (error) {
    yield put(actions.fetchFailure("Fetch Cuisines Error: " + error.message));
  }
}

// function* fetchProductInfoData(action) {
//   const url = action.payload;
//   const url1 = action.payload+"&start=21";
//   const url2 = action.payload+"&start=41";
//   const url3 = action.payload+"&start=61";
//   yield put(actions.fetchRequest());
//   try {
//     const requrl = axios.get(url,{ headers: headers });
//     const requrl1 = axios.get(url1,{ headers: headers });
//     const requrl2 = axios.get(url2,{ headers: headers });
//     const requrl3 = axios.get(url3,{ headers: headers });
//     let arr=[];
//     const response = yield call(() => axios.all([requrl, requrl1, requrl2,requrl3]));
//     const response1 = Object.assign({},response.map(obj =>obj.data.restaurants));
//     const response2 = arr.concat(response1[0],response1[1],response1[2],response1[3]);
//     const restaurants = response2.filter(
//       data => data.restaurant.featured_image !== ""
//     );
//     yield put(actions.fetchRestaurantSuccess(restaurants));
//   } catch (error) {
//     yield put(actions.fetchFailure("Fetch Restaurant Error: " + error.message));
//   }
// }

function* fetchProductInfoData(action) {
  const id = action.payload;
  const options = {
    method: 'GET',
    url: 'https://rapidapi.p.rapidapi.com/products/detail',
    params: {productcode: id, lang: 'en', country: 'in'},
    headers: headers
  };
  const url = `https://developers.zomato.com/api/v2.1/restaurant?res_id=${id}`;
  console.log("fetchPlaces:", url);
  yield put(actions.fetchRequest());
  try {
    const response = yield call(() => axios.request(options));
    const data = response.data.product;
    yield put(actions.fetchPrductInfoSuccess(data));
  } catch (error) {
    yield put(actions.fetchFailure("Fetch Places Error: " + error.message));
  }
}

// function* fetchDailyMenuData(action) {
//   const id = action.payload;
//   const url = `https://developers.zomato.com/api/v2.1/dailymenu?res_id=${id}`;
//   console.log("fetchPlaces:", url);
//   yield put(actions.fetchRequest());
//   try {
//     const response = yield call(() => axios.get(url, { headers: headers }));
//     const menu = response.data.daily_menu.dishes;
//     yield put(actions.fetchDailyMenuSuccess(menu));
//   } catch (error) {
//     yield put(actions.fetchFailure("Fetch Places Error: " + error.message));
//   }
// }
