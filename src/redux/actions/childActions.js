import { authAxios } from "../../utils/authAxios";
 
export const NEW_ENTRY_START = "NEW_ENTRY_START";
export const NEW_ENTRY_SUCCESS = "NEW_ENTRY_SUCCESS";
export const NEW_ENTRY_FAILURE = "NEW_ENTRY_FAILURE";
export const EDIT_ENTRY_START = "EDIT_ENTRY_START";
export const EDIT_ENTRY_SUCCESS = "EDIT_ENTRY_SUCCESS";
export const EDIT_ENTRY_FAILURE = "EDIT_ENTRY_FAILURE";
export const FEED_GIGAPET = "FEED_GIGAPET";
export const UPDATE_GIGAPET = "UPDATE_GIGAPET";

export const newEntry = (/*Entry from form*/) => {
    //post request
}
export const editEntry = (/*Entry from form*/) => {
     //put request
}
export const feedGigapet = (/*points, servings*/) => ({
     /*
    */
})

export const updateGigapet = (/*mood*/) => ({
     /*
    */
})