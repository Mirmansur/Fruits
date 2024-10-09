import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "../../redux/slice/likeSlice";
import cartSlice from "../slice/cartSlice";
import searchSlice from "../../redux/slice/searchSlice";
const store = configureStore({
  reducer: {
    liked: wishlistSlice,
    cards: cartSlice,
    searchData: searchSlice,
  },
});

export default store;
