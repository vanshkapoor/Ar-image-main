//  import {GET_ERRORS,DELETE} from '../actions/types';
import {ADD_QUESTION,DELETE_QUESTION,DISPLAY_QUESTION,QUESTION_LOADING,ADD_ANSWER} from '../actions/types';

const initialState = {
    questions:[],
    isLoading:false
}

export default function(state = initialState,action){
    switch(action.type){
         case ADD_QUESTION:
            return {
                ...state,
                questions:[action.payload, ...state.questions]
            };
            case DISPLAY_QUESTION:
                return{                    
                    questions:action.payload,
                    isLoading:false
                };
            case DELETE_QUESTION:
                return{
                    ...state,
                    questions:state.questions.filter(question => question.id !== action.payload)   
            }            
            case QUESTION_LOADING:
                return{
                    ...state,
                    isLoading:true
                }        
            case ADD_ANSWER:
                return{
                    ...state,
                    questions:[...state.questions]
                }    
            case QUESTION_LOADING:
                return{
                    ...state,
                    isLoading:true
                }         
        default:
            return state;
    }    
}


 