import { SET_CURRENT_USER,LOGOUT_USER,AUTH_LOADING } from './types';
import axios from 'axios';
import swal from 'sweetalert';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode'

let URL = "https://dscbvp.herokuapp.com/api/auth/";

//register user
export const registerUser = (userdata, history) => dispatch => {
  axios.post(URL + "register", userdata)
    .then(res => {
      swal("YAYY!", "Verify your email to register completely:)", "success");
      history.push('/login')
    })
    .catch(err => {
      swal("Oops!", "Couldnt register you:( ..Please Contact the team ", "error");
      console.log(err)
    }
    );
};




//login user
export const loginUser = (userdata) => dispatch => {
  dispatch(authLoading());
  axios.post(URL + "login", userdata)
    .then(res => {
      console.log(res);
      const { token } = res.data;
      console.log(token);
      console.log(res.data);
      localStorage.setItem('jwttoken', token);
      let settoken = "Token "+ token;
      console.log(settoken);
      setAuthToken(settoken);
      // const decoded = jwt_decode(token);
      // console.log(decoded);
      dispatch(setCurrentUser(res.data.user));
    })
    .catch(err => {
      swal("Oops!", "Couldnt Login you:( ..Please check your email for verification or Contact the team ", "error");
      console.log(err);
    });
};

export const reloginUser = () =>dispatch =>{
  axios.get(URL + "user")
  .then(res => {
    console.log(res);
    dispatch({
      type:SET_CURRENT_USER,
      payload: res.data
    })
  })
}



//set logged info of user from token
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
};


export const logoutUser =() =>dispatch =>{

  localStorage.removeItem('jwttoken');

  // setAuthToken(false);
  dispatch({
    type:LOGOUT_USER
  })
};

export const authLoading=()=>{
  return{
      type:AUTH_LOADING
  }
}
 