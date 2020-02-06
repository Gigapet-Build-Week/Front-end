import {
    LOGIN_START,
    LOGIN_SUCCESS,
    REGISTER_START,
    REGISTER_SUCCESS,
    GET_CHILD_START,
    GET_CHILD_SUCCESS,
    ADD_CHILD
} from '../actions/userActions';

const initialState = {
    children: [],
    loggingIn: false,
    registering: false,
    gettingChild: false,
    error: ""
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_START:
        return {
          ...state,
          loggingIn: true,
          error: ""
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loggingIn: false,
          error: ""
        };
      case REGISTER_START:
        return {
          ...state,
          registering: true,
          error: ""
        };
      case REGISTER_SUCCESS:
        return {
          ...state,
          registering: false,
          error: ""
        };
      case GET_CHILD_START:
        return {
          ...state,
          gettingChild: true,
          error: ""
        };
      case GET_CHILD_SUCCESS:
        return {
          ...state,
          gettingChild: true,
          children: action.payload,
          error: ""
        };
      case ADD_CHILD:
        return {
          ...state,
          children: [...state.children, action.payload]
        };
      default: 
        return state
    }
}


export default userReducer;
