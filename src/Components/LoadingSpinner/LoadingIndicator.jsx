import React from 'react';
import Loader from 'react-loader-spinner';

const LoadingIndicator = props => {
    // const { promiseInProgress } = usePromiseTracker();
  
    return ( <div style={{marginTop:'150px'}}>
            <div
                style={{
                width: "100%",
                height: "100",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
                }}
            >
                <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
            </div>
      </div>
    )
  };

  export default LoadingIndicator;