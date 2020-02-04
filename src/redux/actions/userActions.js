import { authAxios } from "../../utils/authAxios";
 
export const LOGIN_START = "";
export const LOGIN_SUCCESS = "";
export const REGISTER_START = "";
export const REGISTER_SUCCESS = "";
export const GET_CHILD_START = "";
export const GET_CHILD_SUCCESS = "";
//"stretch export const ADD_CHILD = ""; and change GET_CHILD to GET_CHILDREN
 
export const login = creds => dispatch => {
    /*import this function to LoginForm, used inside form submit.
    import {connect} form react-redux
    <>check how state set up
    <>call login() w/ parameter of the state
    <>.then(res => { if(res) on props.history.push("/child-page")
        });
    <>mapStateToProps = state => ({
        error and loggingIn
    })
    <> on export connect(MSTP, {login})(LoginForm)
     */
    dispatch({ type: LOGIN_START });
    authAxios()
    .post("/login", creds) //possible different name for page
    .then(response => {
      localStorage.setItem("token", /*response.data.payload*/);
      dispatch({ type: LOGIN_SUCCESS });
      return true;
    })
    .catch(error => console.log('Login error:', error));  //possibly error.message
}
 
export const register = creds => dispatch => {
    /*Theoritically same imp process as login */
    dispatch({ type: REGISTER_START });
    authAxios()
    .post("/register", creds) //possible different name for page
    .then(response => {
      localStorage.setItem("token", /*response.data.payload*/);
      dispatch({ type: REGISTER_SUCCESS });
      return true;
    })
    .catch(error => console.log('Register error:', error)); //possibly error.message
}

export const getChild = () => {
    /*import this function to ChildPage, put on getChildren
    import withRouter form react-router-dom
    import {connect } from react-redux
    <>
    <>mapStateToProps = state => ({
        children and gettingChildren and error
    })
    <> on export withRouter( connect(MSTP, {getChild})(ChildPage) ) 
    */
    dispatch({ GET_CHILD_START })
    authAxios()
    .get("/children")
    .then(response => {
        dispatch({ type: GET_CHILD_SUCCESS, payload: response.data }) 
    })
    .catch(error => console.log('Server error:', error)); //possibly error.message           
}