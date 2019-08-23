//  import {GET_ERRORS,DELETE} from '../actions/types';
import {ADD_EVENT,DISPLAY_EVENT,EVENT_LOADING} from '../actions/types';

const initialState = {
    events:[],
    isLoading:false
}

export default function(state = initialState,action){
    switch(action.type){
         case ADD_EVENT:
            return {
                ...state,
                events:[action.payload, ...state.events]
            };
            case DISPLAY_EVENT:
                return{                    
                    events:action.payload,
                    isLoading:false
                };                        
            case EVENT_LOADING:
                return{
                    ...state,
                    isLoading:true
                }                               
        default:
            return state;
    }    
}


 