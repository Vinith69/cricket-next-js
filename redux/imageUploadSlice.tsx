import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ImageState {
  imageLink: string;
}

const initialState: ImageState = {
  imageLink: "/logo.png",
};

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    // profileImage: (state, actions) => {
    //   state.imageFile = actions.payload;
    // },
    setProfileURL: (state, actions) => {
      state.imageLink = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProfileURL } = imageSlice.actions;

export default imageSlice.reducer;
