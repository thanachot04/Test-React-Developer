import { configureStore } from '@reduxjs/toolkit';
import candidateSlice from './slices/candidate';

const store = configureStore({
    reducer: {
        candidate: candidateSlice,
    },
});


export default store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;