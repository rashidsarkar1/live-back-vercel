import { configureStore } from '@reduxjs/toolkit';
import inventoryReducer from './slices/inventorySlice.js';
import transactionReducer from './slices/transactionSlice.js';
import customerReducer from './slices/customerSlice.js';
import dealerReducer from './slices/dealerSlice.js';
import analyticsReducer from './slices/analyticsSlice.js';
import settingsReducer from './slices/settingsSlice.js';

export const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
    transactions: transactionReducer,
    customers: customerReducer,
    dealers: dealerReducer,
    analytics: analyticsReducer,
    settings: settingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
