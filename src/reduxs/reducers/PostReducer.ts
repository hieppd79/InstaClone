import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type State = {
  scrollY: number;
};

const defaultThemeState: State = {
  scrollY: 0,
};

const postSlice = createSlice({
  name: 'post',
  initialState: defaultThemeState,
  reducers: {
    handleScroll(state: State, action: PayloadAction<number>) {
      state.scrollY = action.payload;
    },
  },
});

export const {handleScroll} = postSlice.actions;
export const PostReducer = postSlice.reducer;
