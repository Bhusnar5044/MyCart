import {
    SET_XPOSITION
} from './actiontypes'

export const setXPosition = (x) =>{
    return {
    type: SET_XPOSITION,
    payload:x
    }
  }
