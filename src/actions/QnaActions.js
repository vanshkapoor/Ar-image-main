import axios from 'axios';
import {ADD_QUESTION,DELETE_QUESTION,DISPLAY_QUESTION,QUESTION_LOADING,ADD_ANSWER
} from './types';
import swal from 'sweetalert';

let URL="https://dscbvp.herokuapp.com/api/qnastudent/";

//add post
export const addquestion = postdata => dispatch =>{
    axios.post(URL, postdata)
    .then(res => {
        swal("YAYY!", "Question added successfully! :)", "success");
       dispatch({
           type:ADD_QUESTION,
           payload:res.data   
    })
    }).catch(err => {
        swal("Oops!", "Couldnt add your question..contact the team", "error");
            console.log(err)
    })   
   };
   
//patch answer on post
export const addanswer = (postdata,id) => dispatch =>{
    axios.patch("https://dscbvp.herokuapp.com/api/qna/" + id + "/", postdata)
    .then(res => {
        swal("YAYY!", "Answer for Question added successfully! :)", "success");
        // <Redirect to="/"></Redirect>
       dispatch({
           type:ADD_ANSWER,
           payload:res.data   
    })
    }).catch(err => {
        swal("Oops!", "Couldnt add your answer..contact the team", "error");
            console.log(err)
    })   
   };


   //get posts
   export const getquestion =()=> dispatch =>{
       dispatch(postLoading());
       axios.get("https://dscbvp.herokuapp.com/api/qnadisplay")
       .then(res => 
          dispatch({
              type:DISPLAY_QUESTION,
              payload:res.data
       })
       ).catch(err => {
        swal("Oops!", "Couldnt display questions at the moment :(", "error");
            console.log(err)
        })   
   };

   export const postLoading=()=>{
    return{
        type:QUESTION_LOADING
    }
}
   