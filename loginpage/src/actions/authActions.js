import { FETCH_LOGINCOUNT } from "./type";
import { getUser } from '../commonUtils/Common';

 export const fetchPosts = () => dispatch  => {
        const posts=  getUser().user.loginCounter;
        console.log(posts);
           
        dispatch({
            type: FETCH_LOGINCOUNT,
            payload: posts
        })
        
    
     }
    
