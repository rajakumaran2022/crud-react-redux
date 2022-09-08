import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    items: [
      {
        id: 1,
        username: "raj",
        email: "raj@example.com",
        mobile: 4512458521,
      },
      {
        id: 2,
        username: "kumar",
        email: "kumar@example.com",
        mobile: 4354678675,
      },
    ],
  },
  reducers: {
    addUser: (state, action) => {
      state.items.push(action.payload);
    },
    removeUser: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    editUser: (state, action) => {
      state.items.map((item) => {
        if (item.id === action.payload.id) {
          item.username = action.payload.username;
          item.email = action.payload.email;
          item.mobile = action.payload.mobile;
        }
      });
    },
  },
});

export default usersSlice.reducer;
export const { addUser, removeUser, editUser } = usersSlice.actions;
