import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialstate = {};
const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialstate,
    compose(
        applyMiddleware(...middleware),
        )
);


export default store;

// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers/index';
// export default function configureStore(initialState={}) {
//  return createStore(
//    rootReducer,
//    initialState,
//    applyMiddleware(thunk)
//  );
// }