import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../store slice/appSlice";

const appStore = configureStore({
  reducer: {
    app: appSlice,
  },
});
export default appStore;
