import { configureStore } from "@reduxjs/toolkit";
import topicsSlice from "../features/topics/TopicsSlices.js";
import quizzesSlice from "../features/quizzes/QuizzesSlice.js";

export default configureStore({
  reducer: {
    topics: topicsSlice,
    quizzes: quizzesSlice,
  }
});
