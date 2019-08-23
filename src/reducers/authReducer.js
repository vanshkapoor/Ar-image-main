//  import {GET_ERRORS,DELETE} from '../actions/types';
 import {SET_CURRENT_USER, LOGOUT_USER, AUTH_LOADING} from '../actions/types';

const initialState = {
    isAuthenticated:false,
    user:{},
    isLoading:false
}

export default function(state = initialState,action){
    switch(action.type){
       // case TEST_DISPATCH:
         //   return{
         //       ...state,
         //       user: action.payload
         //   }
         case SET_CURRENT_USER:
         return{
             ...state,
             isAuthenticated: true,//!isEmpty(action.payload),
             user: action.payload,
             isLoading:false
         };
        //  case DELETE:
        //  return{
        //      ...state,
        //      isAuthenticated:false,
        //      user:action.payload
        //  }
         case LOGOUT_USER:
         return{
             ...state,
             isAuthenticated:false,
             user:{},
             isLoading:false
         };
         case AUTH_LOADING:
             return{
                 ...state,
                 isLoading:true
             }
        default:
            return state;
    }    
}


 