//  import {GET_ERRORS,DELETE} from '../actions/types';
import {ADD_ACHIEVEMENT,DISPLAY_ACHIEVEMENT,ACHIEVEMENT_LOADING} from '../actions/types';

const initialState = {
    achievements:[],
    isLoading:false
}

export default function(state = initialState,action){
    switch(action.type){
         case ADD_ACHIEVEMENT:
            return {
                ...state,
                achievements:[action.payload, ...state.achievements]
            };
            case DISPLAY_ACHIEVEMENT:
                return{                    
                    achievements:action.payload,
                    isLoading:false
                };                        
            case ACHIEVEMENT_LOADING:
                return{
                    ...state,
                    isLoading:true
                }                               
        default:
            return state;
    }    
}


 