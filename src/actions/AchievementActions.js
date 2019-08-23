import axios from 'axios';
import {ADD_ACHIEVEMENT,DISPLAY_ACHIEVEMENT,ACHIEVEMENT_LOADING
} from './types';
import swal from 'sweetalert';

let URL="https://dscbvp.herokuapp.com/api/achievement/";

//add post
export const addAchievement = postdata => dispatch =>{
    axios.post(URL, postdata)
    .then(res => {
        swal("YAYY!", "ACHIEVEMENT added successfully! :)", "success");
       dispatch({
           type:ADD_ACHIEVEMENT,
           payload:res.data   
    })
    }).catch(err => {
        swal("Oops!", "Couldnt add your ACHIEVEMENT..contact the team", "error");
            console.log(err)
    })   
   };
   
   //get posts
   export const getAchievement =()=> dispatch =>{
       dispatch(achLoading());
       axios.get("https://dscbvp.herokuapp.com/api/achievements/show")
       .then(res => 
          dispatch({
              type:DISPLAY_ACHIEVEMENT,
              payload:res.data
       })
       ).catch(err => {
        swal("Oops!", "Couldnt display achievements at the moment :(", "error");
            console.log(err)
        })   
   };

   export const achLoading=()=>{
    return{
        type:ACHIEVEMENT_LOADING
    }
}
   