import * as actions from './action.type'

export const Inc = ()=>({type:actions.INCREMENT})
export const Dec = ()=>({type:actions.DECREMENT})
export const Add = (val)=>({type:actions.ADD ,payload:{value:val}})
export const Sub = (val)=>({type:actions.ADD ,payload:{value:val}})
export const Multiply = (val)=>({type:actions.ADD ,payload:{value:val}})
export const Divide = (val)=>({type:actions.ADD ,payload:{value:val}})