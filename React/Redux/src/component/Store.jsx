import { configureStore } from "@reduxjs/toolkit";
import reducers from "./Slice1";

const store = configureStore({
  reducer: {
    slice: reducers,
  },
});

export default store;

/**
const state={
slice1:{
count:0
},
slice2:{
count:1
}
}
 */
