//  import {GET_ERRORS,DELETE} from '../actions/types';
import {ADD_REGISTERED_USER,GET_REGISTERED_USER,DELETE_REGISTERED_USER} from '../actions/types';

const initialState = {
    users:[],
    isLoading:false
}

export default function(state = initialState,action){
    switch(action.type){
         case ADD_REGISTERED_USER:
            return {
                ...state,
                users:[action.payload, ...state.users]
            };
            case GET_REGISTERED_USER:
                return{                    
                    users:action.payload,
                    isLoading:false
                };
            case DELETE_REGISTERED_USER:
                return{
                    ...state,
                    users:state.users.filter(user => user.id !== action.payload)   
            }                             
        default:
            return state;
    }    
}


 