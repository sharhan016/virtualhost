import axios from "axios";
import * as ActionTypes from "./ActionTypes";

export const StallItemsSuccess = (Items) => ({
    type: ActionTypes.LOAD_STALL_ITEMS_SUCCESS,
    items: Items,
  });
  
  export const StallItemsFailed = (error) => ({
    type: ActionTypes.LOAD_STALL_ITEMS_FAILED,
    error: error,
  });
  
  export const StallItemsStart = () => {
    return { type: ActionTypes.LOAD_STALL_ITEMS_START };
  };
  
  export const StallItems = () => {
    let token = localStorage.getItem("token");
    axios.defaults.headers["Authorization"] = `${token}`;
    return (dispatch) => {
     dispatch(StallItemsStart());
      axios
        .get("/stalls")
        .then((res) => dispatch(StallItemsSuccess(res.data.stalls)) )
        .catch((err) => dispatch(StallItemsFailed(err)) );
    };
  };
  
  /*




  */