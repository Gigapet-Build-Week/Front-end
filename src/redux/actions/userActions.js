import { authAxios } from "../../utils/authAxios";
 
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const GET_CHILD_START = "GET_CHILD_START";
export const GET_CHILD_SUCCESS = "GET_CHILD_SUCCESS";
export const ADD_CHILD = "ADD_CHILD";


export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return authAxios()
    .post("https://gigapet-health.herokuapp.com/api/auth/login", creds) //possible different name for page
    .then(response => {
        console.log(response);
      localStorage.setItem("token", response.data.payload);
      dispatch({ type: LOGIN_SUCCESS });
      return true;
    })
    .catch(error => console.log('Login error:', error));  //possibly error.message
}
 
export const register = creds => dispatch => {
    dispatch({ type: REGISTER_START });
    return authAxios()
    .post("/auth/register", creds) //possible different name for page
    .then(response => {
      localStorage.setItem("token", response.data.payload);
      dispatch({ type: REGISTER_SUCCESS });
      return true;
    })
    .catch(error => console.log('Register error:', error)); //possibly error.message
}

export const getChild = () => dispatch => {
    /*import with Router? */
    dispatch({ GET_CHILD_START })
    authAxios()
    .get("/users/children")
    .then(response => {
        dispatch({ type: GET_CHILD_SUCCESS, payload: response.data }) 
    })
    .catch(error => console.log('Server error:', error)); //possibly error.message           
}

export const addChild = (newChild) => {
    return {
        type: ADD_CHILD,
        payload: newChild
    };
}