import * as actionTypes from "../actions/ActionTypes";

const intialState = {
  StallItems: [],
  error: null,
  isLoading: true,
};

 const reducer = (state = intialState, action) => {
    switch (action.type) {
      case actionTypes.LOAD_STALL_ITEMS_START:
          console.log('started')
        return { ...state, error: null, isLoading: true };
      case actionTypes.LOAD_STALL_ITEMS_SUCCESS:
        return { ...state, stallItems: action.items, isLoading: false };
      case actionTypes.LOAD_STALL_ITEMS_FAILED:
        return { ...state, error: action.error, isLoading: false };
      default:
        return state;
    }
  };
  
  export default reducer;