import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import pageRefreshSlice from "./PageRefreshSlice";


const appStore = configureStore({
    reducer : {
        cart : cartReducer,
        pageRefresh: pageRefreshSlice
    }
    
});

export default appStore;