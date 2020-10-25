import React, { Component } from 'react';
// import { render } from '@testing-library/react';
import SignInPage from './Pages/SignInPage/SignInPage'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import FilterBar from './Components/FilterBar/FilterBar';
import * as actions from './Redux'
import * as types from './Redux/Actions/UIActions/actiontypes'
import * as Axtypes from './Redux/Actions/AxiosActions/actionTypes'
import reducer from './Redux/Reducers/AxiosReducer'
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from './test-utils'

import ProductView from './Components/ProductView/ProductView';
import AllProducts from './Components/AllProducts/AllProducts';
 
const mockStore = configureStore([]);

configure({ adapter: new Adapter() });
// test SignInPage Component
// describe("SignIn Page Testing",()=>{
//   test('render the title', () => {
//     const wrapper = shallow(<SignInPage/>);
//     console.log(wrapper.find(".toggle_btn").at(1).text());
//     expect(wrapper.find(".toggle_btn").at(1).text()).toContain('Sign In');
//   });
// });

// test redux actions
describe('actions', () => {
  it('should create an action to set xPosition', () => {
    const text = 0
    const expectedAction = {
      type: types.SET_XPOSITION,
      payload:text
    }
    expect(actions.setXPosition(text)).toEqual(expectedAction)
  });

  it('should create an action to set xPosition', () => {
    const text = "Men Cloths"
    const expectedAction = {
      type: Axtypes.SET_FILTER,
      payload:text
    }
    expect(actions.setFilter(text)).toEqual(expectedAction)
  })
});

// test Reducers
describe('AxiosReducer reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        loading: false,
        filterVal:'men_all',
        image:'',
        category: [],
        productList:[],
        productInfo:[],
        value:0,
        error: ''
      }
    )
  })

  it('should handle SET_FILTER', () => {
    expect(
      reducer([], {
        type: Axtypes.SET_FILTER,
        payload: 'Run the tests'
      })
    ).toEqual(
      {
        filterVal: 'Run the tests',
      }
    )
  })

})

// test redux connected Component
describe('My Connected React-Redux Component', () => {
  let store;
  let dispatch;
  // let component
  beforeEach(() => {
    store = mockStore({
      xPosition: '-2000',
    });
  
    dispatch = jest.fn();
    store.dispatch = dispatch;

  });
 
  it('should render with given state from Redux store', () => {
    const wrapper = shallow(
      <Provider store={store}>
          <FilterBar />
      </Provider>
      );
    expect(wrapper).toMatchSnapshot();
  });
 
  // it('should dispatch both', () => {

  //   const wrapper = shallow(
  //       <Provider store={store}>
  //           <FilterBar/>
  //       </Provider>
  //       );
        
      
  //       shallow.act(() => {
  //        wrapper.find('.cat').props.onClick();
  //       });
  // //   // expect(store.dispatch).toHaveBeenCalledTimes(1);
  //     expect(dispatch).toHaveBeenCalledWith(
  //       actions.setXPosition({ payload:0 })
  //     );
        
  // });

});
