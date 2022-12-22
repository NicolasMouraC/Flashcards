import { configureStore } from "@reduxjs/toolkit";
import TopicsSlice from "../features/topics/TopicsSlices.js";


export default configureStore({
  reducer: {
    topics: TopicsSlice,
  }
});
