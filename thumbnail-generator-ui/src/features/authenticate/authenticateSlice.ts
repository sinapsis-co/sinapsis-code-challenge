import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthenticateState {
  value: boolean;
}

const initialState: AuthenticateState = {
  value: false,
};

export const authenticateSlice = createSlice({
  name: 'authenticate',
  initialState,
  reducers: {
    authToggle: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { authToggle } = authenticateSlice.actions;

export default authenticateSlice.reducer;
