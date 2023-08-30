import { createSlice } from "@reduxjs/toolkit";

// interface ISearcInterface{
//   searchSlice:string
// }

const initialState = {
  search: "",
};

//async Thunk

//create Slice

const searchSlice = createSlice({
  name: "searchFilter",
  initialState,
  reducers: {
    inputSearchItemAction: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const { inputSearchItemAction } = searchSlice.actions;
