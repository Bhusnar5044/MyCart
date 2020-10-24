import {
    SET_XPOSITION
} from '../Actions/UIActions/actiontypes'

const uiReducer = (state={xPosition:-2000},action) =>{
    switch(action.type){
        case SET_XPOSITION:
            console.log(action)
            state = {
                ...state,
                xPosition: action.payload
            }
            break;
    }
    return state;
}

export default uiReducer