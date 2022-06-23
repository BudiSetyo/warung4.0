import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import rootReducers from "../redux/reducers/index";
import dummyData from "../../helpers/dummyData/menu.json";
import idGenerator from "helpers/idGenerator";

const menuData = dummyData.map((item) => {
  return {
    id: idGenerator(),
    name: item.name,
    description: item.description,
    price: item.price,
    category: item.category,
    img: item.img,
  };
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
  preloadedState: {
    menu: menuData,
  },
});

export default store;
