import axios from 'axios';
import { ADD_REGISTERED_USER, GET_REGISTERED_USER, DELETE_REGISTERED_USER } from './types';
import swal from 'sweetalert';
let URL = "https://dscbvp.herokuapp.com/app/api/registerstudent/";

//add user
export const addUser = postdata => dispatch => {
    // dispatch(clearErrors());
    axios.post(URL, postdata)
        .then(res => {
            swal("YAYY!", "Registered successfully! :)", "success");
            dispatch({
                type: ADD_REGISTERED_USER,
                payload: res.data
            })
        }).catch(err => {
            swal("Oops!", "Couldnt register you:( ..Please Contact the team ", "error");
            console.log(err)
        })
};


//get users
export const getUsers = () => dispatch => {
    // dispatch(postLoading());
    axios.get(URL)
        .then(res =>
            dispatch({
                type: GET_REGISTERED_USER,
                payload: res.data
            })
        ).catch(err => {
            swal("Oops!", "Couldnt Display users at the moment:( ..Please Contact the team ", "error");
            console.log(err)
        }
        )
};

export const deleteUser = (id,user) => dispatch => {
    // let DELURL = `https://dscbvp.herokuapp.com/app/api/registerstudent/${id}/`;
    // console.log(DELURL);
    if (window.confirm('Are you sure?This can NOT be undone')){
    axios.delete(`https://dscbvp.herokuapp.com/app/api/registerstudent/${id}/`,user)
        .then(res => {

            swal("Aww!", "Deleted successfully!:( you can join again though ", "success");
            dispatch({
                type: DELETE_REGISTERED_USER,
                payload: id
            // console.log(res);
            })
        }).catch(err => {
            swal("Oops!", "Couldnt Delete the USER at the moment :( ..Please Contact the team ", "error");
            console.log(err.response)
        })
    }
}
