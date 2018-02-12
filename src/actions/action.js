export const  DATA_AVAILABLE = 'DATA_AVAILABLE';

import Data from '.././data.json';

export function getData(){
    return(dispatch) =>{
        setTimeout(()=>{
            var data = Data.busHalts;
            dispatch({type:DATA_AVAILABLE,data:data});
        },2000)
    }
}