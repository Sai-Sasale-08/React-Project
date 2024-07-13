import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "../actionType"


const initialstate={
    isLoading:false,
    isError:false,
    data:[],
}


export const reducer=(state = initialstate,{type,payload})=>{

    switch(type)
    {
        case GET_DATA_REQUEST:
            return{...state,isLoading:payload};

        case GET_DATA_SUCCESS:
            return{...state,data:payload};

        case GET_DATA_FAILURE:
            return{...state,isError:payload}

        default:
            return state;
        
    }

} 