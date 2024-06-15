import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../store slice/appSlice";
import searchSlice from "../store slice/searchSlice";
import chatSlice from "../store slice/chatSlice";

const appStore = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});
export default appStore;
