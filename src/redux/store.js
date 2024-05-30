// import { configureStore } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage";
// import { persistStore, persistReducer } from "redux-persist";
// import { filtersReducer } from "./filtersSlice";
// import { contactsReducer } from "./contactsSlice";

// const persistConfig = {
//   key: "contacts",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, contactsReducer);

// export const store = configureStore({
//   reducer: {
//     filters: filtersReducer,
//     contacts: persistedReducer,
//   },
// });

// export const persistor = persistStore(store);

import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { persistCombineReducers } from "redux-persist";
import { filtersReducer } from "./filtersSlice";
import { contactsReducer } from "./contactsSlice";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ["filters"],
};

const rootReducer = persistCombineReducers(persistConfig, {
  filters: filtersReducer,
  contacts: contactsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
