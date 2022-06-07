import { ADD, DECREMENT, DIVIDE, INCREMENT, MULTIPLY, SUB } from "./action.type"


export const Reducer =(state={count:0},action)=>{


    switch(action.type)
    {
        case INCREMENT:
            {
                return {...state,count:state.count+1}
            }
        case DECREMENT:
            {
                return {...state,count:state.count-1}
            }
        case ADD:
            {
                return {...state,count:state.count+action.payload.value}  
            }
        case SUB:
            {
                return {...state,count:state.count-action.payload.value}
            }
        case MULTIPLY:
            {
                return {...state,count:state.count*action.payload.value}
            }
        case DIVIDE:
            {
                return {...state,count:state.countaction.payload.value}
            }
        default:
            return {...state}      
           
    }

//     if(action.type===SUB)
//     {
//         state.count=state.count-action.payload.value
//     }
//    else if(action.type===ADD)
//     {
//         state.count=state.count+action.payload.value
//     }
//    else if(action.type===MULTIPLY)
//     {
//         state.count=state.count*action.payload.value
//     }
//    else if(action.type===INCREMENT)
//     {
//         state.count=state.count+1
//     }
//    else if(action.type===DECREMENT)
//     {
//         state.count=state.count-1
//     }
//     return {...state}

  
}