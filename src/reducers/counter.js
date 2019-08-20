import {COUNTER_CHANGE_VALUE} from "../actions/types"

const initialState = {
  count: 0,
}

const reducer =(state = initialState, action) => {
  switch (action.type) {
    case COUNTER_CHANGE_VALUE:
      return {
        ...state,
        count: action.payload  
      }
    default:
      return state
  }
}

export default reducer



