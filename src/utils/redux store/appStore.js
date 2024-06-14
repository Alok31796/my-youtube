import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../store slice/appSlice";
import searchSlice from "../store slice/searchSlice";

const appStore = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
  },
});
export default appStore;
