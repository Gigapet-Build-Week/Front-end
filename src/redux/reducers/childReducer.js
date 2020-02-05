import {
    NEW_ENTRY_START,
    NEW_ENTRY_SUCCESS,
    EDIT_ENTRY_START,
    EDIT_ENTRY_SUCCESS,
    DELETE_ENTRY_START,
    DELETE_ENTRY_SUCCESS
} from '../actions/childActions';

const initialState = {
    /*
    entry: "",
    entryEditing: false,
    error: ""
    */
}

const childReducer = (state = initialState, action) => {
    switch(action.type) {
      case  NEW_ENTRY_START:
        return {
            ...state,
            
        };
      case NEW_ENTRY_SUCCESS:
        return {
            ...state,
           
        };
      case EDIT_ENTRY_START:
        return {
            ...state,
            
        };
      case EDIT_ENTRY_SUCCESS:
        return {
            ...state,
            
        };
      case DELETE_ENTRY_START:
        return {
            ...state,
            entryEditing: true
        };
      case DELETE_ENTRY_SUCCESS:
        return {
            ...state,
            entryEditing: false
        };
      default:
        return state;
    }
}

export default childReducer;
