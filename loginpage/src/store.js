import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers/index';


// const initialState = getUser().user.loginCounter;
const initialState = {};
console.log("this is a initial:",initialState);

const middleware =[thunk];


const store = createStore(rootReducer, initialState, 
    compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));
// console.log(store)
export default store;