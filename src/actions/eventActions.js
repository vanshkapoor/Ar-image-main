import axios from 'axios';
import {ADD_EVENT,DISPLAY_EVENT,EVENT_LOADING
} from './types';
import swal from 'sweetalert';

let URL="https://dscbvp.herokuapp.com/api/rsvpevent/";

//add post
export const addEvent = postdata => dispatch =>{
    axios.post(URL, postdata)
    .then(res => {
        swal("YAYY!", "Event added successfully! :)", "success");
       dispatch({
           type:ADD_EVENT,
           payload:res.data   
    })
    }).catch(err => {
        swal("Oops!", "Couldnt add your event..contact the team", "error");
            console.log(err)
    })   
   };
   
   //get posts
   export const getEvent =()=> dispatch =>{
       dispatch(postLoading());
       axios.get(URL)
       .then(res => 
          dispatch({
              type:DISPLAY_EVENT,
              payload:res.data
       })
       ).catch(err => {
        swal("Oops!", "Couldnt display events at the moment :(", "error");
            console.log(err)
        })   
   };

   export const postLoading=()=>{
    return{
        type:EVENT_LOADING
    }
}
   