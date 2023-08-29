import { Middleware } from "@reduxjs/toolkit";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const logger:Middleware=(store)=>(next)=>(action)=>{
    console.log(store.getState());
    next(action);
}

export default logger;