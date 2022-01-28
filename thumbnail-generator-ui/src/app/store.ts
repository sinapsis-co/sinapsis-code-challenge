import { configureStore } from '@reduxjs/toolkit';
import imageSelectedReducer from '../features/imageSelected/imageSelectedSlice';
import cameraStatusReducer from '../features/cameraStatus/cameraStatusSlice';

export const store = configureStore({
  reducer: {
    imageSelected: imageSelectedReducer,
    cameraStatus: cameraStatusReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
