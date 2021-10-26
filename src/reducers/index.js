import { SWITCH_HEADER } from "../actions";
import  initialState  from "./initialState";

const auxReducer = (state = initialState, action) => {
 
    switch (action.type) {
      case SWITCH_HEADER:
          return
      default:
      return state;
    }
}

export default auxReducer