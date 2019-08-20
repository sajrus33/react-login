import {COUNTER_CHANGE_VALUE} from "./types"


export const changeValue = payload => dispatch => {
      dispatch({
        type: COUNTER_CHANGE_VALUE,
        payload
      })
  }
  
  
