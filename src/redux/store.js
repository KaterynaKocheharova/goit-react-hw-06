import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { filtersReducer } from "./filtersSlice";
import { contactsReducer } from "./contactsSlice";

const persistConfig = {
  key: "contacts",
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    contacts: persistedReducer,
  },
});

export const persistor = persistStore(store);
