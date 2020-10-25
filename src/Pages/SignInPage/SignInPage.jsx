import React, { Component } from 'react'
import {connect} from 'react-redux'


const SignInPage =({uiData})=>{
    let data = uiData.xPosition;
    return(
        <div style={{margin:'120px'}}>
            <h1>SignIn Page</h1>
            {data}
        </div>
    )
}

const mapStateToProps = state => {
    return {
      uiData: state.uiReducer,
    };
  };

export default connect(mapStateToProps)(SignInPage) 

// export default SignInPage