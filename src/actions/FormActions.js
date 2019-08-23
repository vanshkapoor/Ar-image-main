import axios from 'axios';
import {ADD_FORM
} from './types';
import swal from 'sweetalert';

let URL="https://ed-ar.herokuapp.com/api/image/";

//add post
export const addForm = postdata => dispatch =>{
    const fd = new FormData();
    fd.append('name',postdata.title);
    fd.append('description',postdata.description);
    fd.append('topic',postdata.category);
    fd.append("image",postdata.file,postdata.file.name);
    fd.append("marker",postdata.marker_file,postdata.marker_file);
    console.log(fd);
    axios.post(URL, fd)
    .then(res => {
        swal("YAYY!", "AR model added successfully! :)", "success");      
    }).catch(err => {
        swal("Oops!", "Couldnt add your event..contact the team", "error");
            console.log(err)
    })   
   };
   
   //get posts
//    export const getEvent =()=> dispatch =>{
//        dispatch(postLoading());
//        axios.get(URL)
//        .then(res => 
//           dispatch({
//               type:DISPLAY_EVENT,
//               payload:res.data
//        })
//        ).catch(err => {
//         swal("Oops!", "Couldnt display events at the moment :(", "error");
//             console.log(err)
//         })   
//    };

//    export const postLoading=()=>{
//     return{
//         type:EVENT_LOADING
//     }
// }
   