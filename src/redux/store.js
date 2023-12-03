import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const FeelingRating = (state = '', action ) => {

    if (action.type === "SET_FEELINGS") {

        const feelingsRate = action.payload
        console.log('feeling rating', feelingsRate);
        return feelingsRate
}

    return state;
}


const UnderstandingRating = (state = '', action) => {
    if (action.type === 'SET_UNDERSTANDING') {

        const UnderstandingRate = action.payload
        console.log("understanding rate:", UnderstandingRate);
        return UnderstandingRate
    }
    return state; 
}


const SupportRating = (state = '', action) => {
    if (action.type === 'SET_SUPPORT') {

        const SupportingRate = action.payload
        console.log("understanding rate:", SupportingRate);
        return SupportingRate
    }
    return state; 
}


const Comment = (state = '', action) => {
    if (action.type === 'SET_COMMENT') {

        const comment = action.payload
        console.log("comment:", comment);
        return comment
    }
    return state; 
}

const getFeedback = (state = [], action) => {
    if (action.type === 'SET_FEEDBACK') {

        const feedback = action.payload
        console.log('review of feed back', feedback);
        return feedback
    }

    if (action.type === "CLEAR_INPUTS") {
        return []
    }
   
    return state;


}





const store = createStore(  
    combineReducers({
        FeelingRating,
        UnderstandingRating,
        SupportRating,
        Comment,
        getFeedback

    }),
    applyMiddleware(logger),
  );
  
  
  export default store;