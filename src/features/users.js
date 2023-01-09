import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
   name: "users",
   initialState: {
      users: [],
      currentUsers: [],
      loading: true,
      lastFetched: null,
   },
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
