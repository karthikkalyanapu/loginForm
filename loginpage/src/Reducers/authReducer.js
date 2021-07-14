import { FETCH_LOGINCOUNT } from "../actions/type";

const initialState = {
    items:[],

}
const loginReducer = (state= initialState, action) => {
    switch(action.type){
         case FETCH_LOGINCOUNT:
                
             return {
                 ...state,
                items: action.payload
             }
        default: return state;

    }
}
export default loginReducer