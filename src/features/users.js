import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   users: [],
   currentUsers: [],
   loading: true,
   lastFetched: null,
};

const userSlice = createSlice({
   name: "users",
   initialState: initialState,
   reducers: {
      setUsers: (state, action) => {
         state.users = action.payload;
         state.currentUsers = action.payload;
         state.loading = false;
         state.lastFetched = new Date();
      },
      setCurrentUsers: (state, action) => {
         state.currentUsers = action.payload;
      },
      setLoading: (state, action) => {
         state.loading = action.payload;
      },
   },
});

export const { setUsers, setCurrentUsers, setLoading } = userSlice.actions;
export default userSlice.reducer;
