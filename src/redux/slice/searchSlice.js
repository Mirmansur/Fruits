import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.products = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const { setSearch } = searchSlice.actions;
