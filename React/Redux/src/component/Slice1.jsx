import {createSlice} from "@reduxjs/toolkit";

const slice1=createSlice({
    name:"slice1",
    initialState:{count:0},
    reducers:{
        increment:state=>{
            state.count+=1;
        },
        decrement:state=>{
            state.count-=1;
        },
        reset:state=>{
            state.count=0;
        }
    }
})


export const {increment,decrement,reset}=slice1.actions;
export default slice1.reducer;