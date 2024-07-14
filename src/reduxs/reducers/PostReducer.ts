import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type State = {
  scrollY: number;
  currentUserName: string;
};

const defaultThemeState: State = {
  scrollY: 0,
  currentUserName: 'mrbeast',
};

const postSlice = createSlice({
  name: 'post',
  initialState: defaultThemeState,
  reducers: {
    handleScroll(state: State, action: PayloadAction<number>) {
      state.scrollY = action.payload;
    },
    updateCurrentUserName(state: State, action: PayloadAction<string>) {
      state.currentUserName = action.payload;
    },
  },
});

export const {handleScroll, updateCurrentUserName} = postSlice.actions;
export const PostReducer = postSlice.reducer;
