import { authAxios } from "../../utils/authAxios";
 
export const LOGIN_START = "";
export const LOGIN_SUCCESS = "";
export const LOGIN_FAILURE = "";
export const REGISTER_START = "";
export const REGISTER_SUCCESS = "";
export const REGISTER_FAILURE = "";
//"stretch export const ADD_CHILD = "";
 
 
export const login = () => {
                /*(creds) => dispatch =>
    dispatch LOGIN_START
    //call authAxios
    .post("/login-page", creds)
    .then(res => {
        set token to res.data.payload
        dispatch LOGIN_SUCCESS
    })
    .catch(error => {
        log error
        dispatch LOGIN_FAILURE
    })             
    */
}
 
export const register = () => {
                    /*(creds) => dispatch =>
dispatch REGISTER_START
//call authAxios
.post("/register-page", creds)
.then(res => {
    set token to res.data.payload
    dispatch REGISTER_SUCCESS
})
.catch(error => {
    log error
    dispatch REGISTER_FAILURE
})             
*/
}
