import { authAxios } from "../../utils/authAxios";

export const NEW_ENTRY_START = "NEW_ENTRY_START";
export const NEW_ENTRY_SUCCESS = "NEW_ENTRY_SUCCESS";
export const EDIT_ENTRY_START = "EDIT_ENTRY_START";
export const EDIT_ENTRY_SUCCESS = "EDIT_ENTRY_SUCCESS";
export const DELETE_ENTRY_START = "DELETE_ENTRY_START";
export const DELETE_ENTRY_SUCCESS = "DELETE_ENTRY_SUCCESS";
export const FEED_GIGAPET = "FEED_GIGAPET";
export const UPDATE_GIGAPET = "UPDATE_GIGAPET";

export const newEntry = entry => dispatch => {
    //post request
    dispatch({ type: NEW_ENTRY_START })
    authAxios()
    .post(`/children/:id/food-log`, entry)
    .then(response => {
        dispatch({ type: NEW_ENTRY_SUCCESS, payload: response})
    })
    .catch(error => console.log('Post error:', error)); 
}
export const editEntry = event => dispatch =>{
    event.preventDefault()
    //put request
    dispatch({ type: EDIT_ENTRY_START })
    authAxios()
    .put(/*`/entry url/${entryToEdit.id}`, entryToEdit*/)
    .then(response => {
        dispatch({ type: EDIT_ENTRY_SUCCESS, payload: response.data })
        /* figure out with state how to establish edit */
    })
    .catch(error => console.log('Put error:', error));
}

export const deleteEntry = (/*Entry from form*/) => dispatch =>{
    //delete request
    dispatch({ type: EDIT_ENTRY_START })
    authAxios()
    .delete(/*`/entry url/${entry.id}`*/)
    .then(response => {
       dispatch({ type: EDIT_ENTRY_SUCCESS, payload: response.data})
       /* figure out with state how to establish delete */
    })
    .catch(error => console.log('Delete error:', error))
}

export const feedGigapet = (points, servings) => dispatch => {
    dispatch({ type: FEED_GIGAPET, 
        payload: {
            points,
            servings
        }
    })
}

export const updateGigapet = (status) => dispatch => {
    dispatch({ type: UPDATE_GIGAPET, payload: status })
}