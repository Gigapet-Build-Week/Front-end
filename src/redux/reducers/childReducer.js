import {
    NEW_ENTRY_START,
    NEW_ENTRY_SUCCESS,
    EDIT_ENTRY_START,
    EDIT_ENTRY_SUCCESS,
    DELETE_ENTRY_START,
    DELETE_ENTRY_SUCCESS,
    FEED_GIGAPET,
    UPDATE_GIGAPET
} from '../actions/childActions';

const initialState = {
    entry: "",
    entryEditing: false,
    health: 15,
    status: "neutral",
    error: ""
}

const childReducer = (state = initialState, action) => {
    switch(action.type) {
      case  NEW_ENTRY_START:
        return {
            ...state,
            error: ""
        };
      case NEW_ENTRY_SUCCESS:
        return {
            ...state,
            entry: action.payload,
            error: ""
        };
      case EDIT_ENTRY_START:
        return {
            ...state,
            entryEditing: true,
            error: ""
        };
      case EDIT_ENTRY_SUCCESS:
        return {
            ...state,
            entryEditing: false,
            entry: action.payload,
            error: ""
        };
      case DELETE_ENTRY_START:
        return {
            ...state,
            error: ""
        };
      case DELETE_ENTRY_SUCCESS:
        return {
            ...state,
            entry: action.payload,
            error: ""
        };
      case FEED_GIGAPET:
        return {
            ...state,
            health: action.payload.points * action.payload.servings,
            error: ""
        };
      case UPDATE_GIGAPET:
        return {
            ...state,
            status: action.payload,
            error: ""
        };
      default:
        return state;
    }
}

export default childReducer;
